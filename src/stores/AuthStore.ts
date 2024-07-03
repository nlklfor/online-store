import {computed, makeAutoObservable, runInAction} from "mobx";
import axios from "../../db/axios.ts"; // Make sure axios is configured to point to your backend

class AuthStore {
    user: any = null;
    token: string | null = null;
    isLoading: boolean = false;
    error: string | null = null;

    constructor() {
        makeAutoObservable(this, {
            isAuth: computed
        });
    }

    get isAuth() {
        return !!this.user && !!this.token;
    }

    async login(email: string, password: string) {
        this.isLoading = true;
        this.error = null;
        try {
            const response = await axios.post('/auth/login', {email, password});
            runInAction(() => {
                this.user = response.data.user;
                this.token = response.data.token;
                this.isLoading = false;
                localStorage.setItem('user', JSON.stringify(this.user));
                localStorage.setItem('token', JSON.stringify(this.token));
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
                this.isLoading = false;
                localStorage.setItem('user', JSON.stringify(this.user));
                localStorage.setItem('token', JSON.stringify(this.token));
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
        });
    }
}

export const authStore = new AuthStore();
