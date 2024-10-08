import axios from "axios";

export const api = axios.create({
    baseURL: 'https://connections-api.goit.global',
});

export const setToken = (token) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
    api.defaults.headers.common.Authorization = '';
};