import axios from 'axios';
import {authStore} from "../src/stores/AuthStore.ts";

const instance = axios.create({
    baseURL: ('http://localhost:3333')
})

instance.interceptors.request.use((config) => {
    const token = authStore.token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default instance;