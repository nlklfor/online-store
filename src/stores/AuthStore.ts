import {computed, makeAutoObservable, runInAction} from "mobx";
import axios from "../../db/axios.ts";

interface User {
    id: string;
    email: string;
    fullName?: string;
    avatarUrl?: string;
}

class AuthStore {
    user!: User | null;
    token = localStorage.getItem("token") || null;
    isLoading: boolean = false;
    error: string | null = null;

    constructor() {
        makeAutoObservable(this, {
            isAuth: computed
        });
        this.user = JSON.parse(localStorage.getItem("user") || "null");

        if (this.token && this.user) {
            this.setAuthHeader(this.token);
        }
    }

    get isAuth() {
        return !!this.user && !!this.token;
    }

    setAuthHeader(token: string | null) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    saveUserData = () => {
        this.isLoading = false;
        localStorage.setItem('user', JSON.stringify(this.user));
        localStorage.setItem('token', JSON.stringify(this.token));
        this.setAuthHeader(this.token!);
    }

    async login(email: string, password: string) {
        this.isLoading = true;
        this.error = null;
        try {
            const response = await axios.post('/auth/login', {email, password});
            runInAction(() => {
                this.user = response.data.user;
                this.token = response.data.token;
                this.saveUserData();
            });
        } catch (err) {
            runInAction(() => {
                this.error = (err as Error).message;
                this.isLoading = false;
            });
        }
    }

    async register(email: string, password: string, fullName: string) {
        this.isLoading = true;
        this.error = null;
        try {
            const response = await axios.post('/auth/register', {email, password, fullName});
            runInAction(() => {
                this.user = response.data.user;
                this.token = response.data.token;
                this.saveUserData();
            });
        } catch (err) {
            runInAction(() => {
                this.error = (err as Error).message;
                this.isLoading = false;
            });
        }
    }

    logout() {
        runInAction(() => {
            this.user = null;
            this.token = null;
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            delete axios.defaults.headers.common['Authorization'];
        });
    }
}

export const authStore = new AuthStore();
