import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// base configuration for axios instances
const config: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 seconds timeout
  baseURL: process.env.NEXT_PUBLIC_API_URL,
};

// create axios instance with the configuration
const axiosInstance: AxiosInstance = axios.create(config);

// request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // you can add logic here (tokens, headers, etc.)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // you can transform responses here if needed
    return response;
  },
  (error) => {
    // centralized error handling
    if (error.response) {
      // The server responded with a status code outside the 2xx range
      console.error("API Error:", error.response.status, error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", error.request);
    } else {
      // Something happened in setting up the request
      console.error("Request error:", error.message);
    }

    return Promise.reject(error);
  }
);

// abstract client API
export const apiClient = {
  async get<T>(url: string, params?: Record<string, unknown>): Promise<T> {
    const response: AxiosResponse<T> = await axiosInstance.get(url, { params });
    return response.data;
  },

  async post<T>(url: string, data?: Record<string, unknown> | unknown): Promise<T> {
    const response: AxiosResponse<T> = await axiosInstance.post(url, data);
    return response.data;
  },

  async put<T>(url: string, data?: Record<string, unknown> | unknown): Promise<T> {
    const response: AxiosResponse<T> = await axiosInstance.put(url, data);
    return response.data;
  },

  async delete<T>(url: string): Promise<T> {
    const response: AxiosResponse<T> = await axiosInstance.delete(url);
    return response.data;
  },

  // custom request
  async request<T = unknown>(config: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await axiosInstance(config);
    return response.data;
  },
};

// export axios instance by if we need direct access
export { axiosInstance };
