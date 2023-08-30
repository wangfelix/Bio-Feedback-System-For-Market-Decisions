import axios, { AxiosPromise, AxiosRequestConfig } from "axios";
import queryString from "query-string";

export const requestConfigDefaultHeaders = () => {
    return {
        Accept: "application/json",
        "Content-Type": "application/json",
    };
};

/**
 * Serialize parameters, inserting | as divider between elements of an array.

 * @param params any type, because is used by axios for all kinds of calls
 */
export const paramsSerializer = (params: any): string =>
    queryString.stringify(params, { arrayFormat: "separator", arrayFormatSeparator: "|" });

export const defaultConfig = (): AxiosRequestConfig => ({
    paramsSerializer,
    baseURL: "http://localhost:5200",
    headers: requestConfigDefaultHeaders(),
});

const axiosInstance = axios.create();

export const sendGetRequest = <T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T> =>
    axiosInstance.get(url, { ...defaultConfig(), ...config });

export const sendPostRequest = <T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T> =>
    axiosInstance.post(url, data, { ...defaultConfig(), ...config });
