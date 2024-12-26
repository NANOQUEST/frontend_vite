import axios from "axios";
import { getToken, removeToken } from "./utils/tokenService";

const api = axios.create({
    // baseURL: "https://backend-nanoquest.onrender.com",
    baseURL: "http://localhost:5000",
    withCredentials: true,
});

// Add a request interceptor
api.interceptors.request.use(
    (config) => {
        const token = getToken(); // Fetch the token from local storage
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`; // Attach token to headers
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

api.interceptors.response.use(
    (response) => response, // Return response if successful
    (error) => {
        // Handle specific error responses (e.g., 401 unauthorized)
        if (error.response && error.response.status === 401) {
            removeToken(); // Remove token from local storage
            localStorage.setItem("hasShownLoginPopup", "false");
            window.location.href = "/";
        }
        return Promise.reject(error); // Return the error for further handling
    },
);

export default api;
