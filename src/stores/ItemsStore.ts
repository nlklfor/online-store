import {makeAutoObservable, runInAction} from "mobx";
import axios from "../../db/axios.ts";

export interface Item {
    _id: string;
    title: string;
    price: number;
    currency: string;
    img_url: string[];
    brand: string;
    gender: string;
    type: string;
    color: string;
    style: string;
    amount: number;
    desc: string;
    size: number[];
}

export class ItemStore {
    constructor() {
        makeAutoObservable(this);
    }

    items: Item[] = [];
    isLoading: boolean = false;
    error: string | null = null;

    async getItems() {
        this.isLoading = true;
        this.error = null;
        try {
            const response = await axios.get<Item[]>('/items');
            runInAction(() => {
                this.items = response.data;
                this.isLoading = false;
            })
        } catch (err) {
            runInAction(() => {
                this.error = (err as Error).message;
                this.isLoading = false;
            })
        }
    }

    async getItemById(itemId: string) {
        this.isLoading = true;
        this.error = null;
        try {
            const response = await axios.get<Item>(`/items/${itemId}`)
            runInAction(() => {
                const item = response.data;
                const index = this.items.findIndex(item => item._id === itemId);
                if (index >= 0) {
                    this.items[index] = item;
                } else {
                    this.items.push(item);
                }
                this.isLoading = false;
            })
        } catch (err) {
            runInAction(() => {
                this.error = (err as Error).message;
                this.isLoading = false;
            })
        }
    }
}


export const itemStore = new ItemStore();