import {makeAutoObservable, runInAction} from "mobx";
import axios from "../../db/axios.ts";
import {createContext, useContext} from "react";
import {Item} from "./ItemsStore.ts";


class CartStore {
    cartItems: Item[] = [];
    wishlistItems: Item[] = [];
    orderHistory: Item[] = [];
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    async addToCart(item: Item) {
        this.isLoading = true;
        try {
            const response = await axios.post('/cart', {item}); // Send the item object directly
            runInAction(() => {
                this.cartItems.push(response.data);
                this.isLoading = false;
            });
        } catch (error) {
            console.error('Failed to add to cart:', error);
            runInAction(() => {
                this.isLoading = false;
            });
        }
    }

    async addToWishlist(item: Item) {
        this.isLoading = true;
        try {
            const response = await axios.post('/wishlist', {item});
            runInAction(() => {
                this.wishlistItems.push(response.data);
                this.isLoading = false;
            });
        } catch (error) {
            console.error('Failed to add to wishlist:', error);
            runInAction(() => {
                this.isLoading = false;
            });
        }
    }

    async removeFromCart(itemId: string) {
        this.isLoading = true;
        try {
            await axios.delete(`/cart/${itemId}`);
            this.cartItems = this.cartItems.filter(item => item._id !== itemId);
        } catch (error) {
            console.error('Failed to remove from cart:', error);
        } finally {
            this.isLoading = false;
        }
    }

    async removeFromWishlist(itemId: string) {
        this.isLoading = true;
        try {
            await axios.delete(`/wishlist/${itemId}`);
            this.wishlistItems = this.wishlistItems.filter(item => item._id !== itemId);
        } catch (error) {
            console.error('Failed to remove from wishlist:', error);
        } finally {
            this.isLoading = false;
        }
    }

    async checkout() {
        this.isLoading = true;
        try {
            await axios.post('/checkout', this.cartItems);
            this.orderHistory.push(...this.cartItems);
            this.cartItems = [];
            console.log(this.cartItems)
        } catch (error) {
            console.error('Failed to checkout:', error);
        } finally {
            this.isLoading = false;
        }
    }
}

export const cartStore = new CartStore();
export const CartStoreContext = createContext(cartStore);
export const useCartStore = () => useContext(CartStoreContext);
