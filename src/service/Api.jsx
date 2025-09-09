import axios from "axios";

export const BASE_URL = 'https://uzai.com.tr/';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.get['Authorization'] = 'none';

export function get(url) {
    return axios.get(url)
}

export function post(url, values, config = {}) {
    return axios.post(url, values, config)
}

export function put(url, values) {
    return axios.put(url, values)
}

export function del(url) {
    return axios.delete(url)
}
