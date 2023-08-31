import axios, { AxiosPromise, AxiosRequestConfig } from "axios";
import queryString from "query-string";

export const requestConfigDefaultHeaders = () => ({
    Accept: "application/json",
    "Content-Type": "application/json",
});

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

const AXIOS_INSTANCE = axios.create();

/**
 * Axios get request wrapper, which inserts a default configuration and types the response using the given generic.
 *
 * @param url Get request URL.
 * @param config Optional configuration.
 */
export const sendGetRequest = <T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T> =>
    AXIOS_INSTANCE.get(url, { ...defaultConfig(), ...config });

/**
 * Axios post request wrapper, which inserts a default configuration and types the response using the given generic.
 *
 * @param url Post request URL.
 * @param data Request body.
 * @param config Optional configuration.
 */
export const sendPostRequest = <T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T> =>
    AXIOS_INSTANCE.post(url, data, { ...defaultConfig(), ...config });
