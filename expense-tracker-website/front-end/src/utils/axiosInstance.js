import axios from "axios";
import { BASE_URL } from "./apiPath";

//console.log("axiosInstance Debug 1");
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

//console.log("axiosInstance Debug 2");
//console.log("axiosInstance Debug 2 BASE_URL", BASE_URL);

//Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    //console.log("axiosInstance Debug 2 001");
    //console.log("axiosInstance Debug 2 001 BASE_URL: ", BASE_URL);
    //console.log("axiosInstance Debug 2 001 accessToken: ", accessToken);
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
      //console.log("axiosInstance Debug 2 002");
    } else {
      //console.log("Access token not found!");
    }
    //console.log("axiosInstance Debug 2 003");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//console.log("axiosInstance Debug 3");
//Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    //console.log("axiosInstance Debug 3 001");
    return response;
  },
  (error) => {
    //Handle common errors globally
    //console.log("axiosInstance Debug 3 002");
    if (error.response.status === 401) {
      //Redirect to login page
      window.location.href = "/login";
      //console.log("axiosInstance Debug 3 003");
    } else if (error.response.status === 500) {
      console.error("Server error, Please try again later.");
    } else if (error.code === "ECONNABORTED") {
      console.error("Request timeout. Please try again.");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
