import axios from 'axios'
import router from "./index.js";
import Cookies from "js-cookie";

// Интерцептор запросов
axios.interceptors.request.use(config => {
    const token = Cookies.get('auth_token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// Интерцептор ответов
axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response && error.response.status === 401) {
        Cookies.remove('auth_token');
        router.push('/sign-in');
    }
    return Promise.reject(error);
});

export default axios;
