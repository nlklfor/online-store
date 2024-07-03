// controllers/cartController.js
import Cart from '../models/Cart.js'; // Assuming you have a Cart model
import Wishlist from '../models/Wishlist.js'; // Assuming you have a Wishlist model
import Order from '../models/Order.js'; // Assuming you have an Order model

export const addItemToCart = async (req, res) => {
    try {
        const {itemId, quantity} = req.body;
        const userId = req.userId;

        // Add item to cart in the database
        const cartItem = await Cart.create({userId, itemId, quantity});
        res.status(201).json(cartItem);
    } catch (err) {
        res.status(500).json({message: "Failed to add to cart", error: err.message});
    }
};

export const addItemToWishlist = async (req, res) => {
    try {
        const {itemId} = req.body;
        const userId = req.userId;

        // Add item to wishlist in the database
        const wishlistItem = await Wishlist.create({userId, itemId});
        res.status(201).json(wishlistItem);
    } catch (err) {
        res.status(500).json({message: "Failed to add to wishlist", error: err.message});
    }
};

export const removeFromCart = async (req, res) => {
    try {
        const {itemId} = req.params;
        const userId = req.userId;

        // Remove item from cart in the database
        await Cart.deleteOne({userId, itemId});
        res.status(204).end();
    } catch (err) {
        res.status(500).json({message: "Failed to remove from cart", error: err.message});
    }
};

export const removeFromWishlist = async (req, res) => {
    try {
        const {itemId} = req.params;
        const userId = req.userId;

        // Remove item from wishlist in the database
        await Wishlist.deleteOne({userId, itemId});
        res.status(204).end();
    } catch (err) {
        res.status(500).json({message: "Failed to remove from wishlist", error: err.message});
    }
};

export const checkout = async (req, res) => {
    try {
        const userId = req.userId;
        const {cartItems} = req.body;

        // Move items from cart to order history in the database
        const order = await Order.create({userId, items: cartItems});
        await Cart.deleteMany({userId});

        res.status(201).json(order);
    } catch (err) {
        res.status(500).json({message: "Failed to checkout", error: err.message});
    }
};
