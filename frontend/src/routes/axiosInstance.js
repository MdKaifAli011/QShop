import axios from "axios";

export let AxiosInstance = axios.create({
    baseURL : import.meta.env.VITE_BASE_URL
})