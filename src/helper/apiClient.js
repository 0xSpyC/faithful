import axios from "axios";

const apiClient = () => {
    const axiosInstance = axios.create({
        baseURL: "https://api.starton.io/v3/",
        headers: {
            "x-api-key": "sk_live_59c4d4bb-3493-4364-9e18-d06b28c443ff",
        },
    });
    return (axiosInstance)
}

export default apiClient;