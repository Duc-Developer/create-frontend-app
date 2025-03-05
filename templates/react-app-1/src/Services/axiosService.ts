import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { AppConfigs } from '@src/Constants';
import { AxiosInterceptors } from '@src/Models';

const APP_CONFIGS = AppConfigs.default;
class AxiosService {
    protected service: AxiosInstance = axios;
    constructor() {
        const service = axios.create({
            responseType: 'json',
            baseURL: APP_CONFIGS.ROOT_API,
        });
        this.service = service;
    }

    getService = () => {
        return this.service;
    };

    setInterceptors = (interceptors: AxiosInterceptors) => {
        this.service.interceptors = interceptors;
    };

    get = <T>(url: string, config?: AxiosRequestConfig) => this.service.get<T>(url, config);

    delete = <T>(url: string, config?: AxiosRequestConfig) => this.service.delete<T>(url, config);

    head = <T>(url: string, config?: AxiosRequestConfig) => this.service.head<T>(url, config);

    post = <T>(url: string, data = {}, config?: AxiosRequestConfig) => this.service.post<T>(url, data, config);

    put = <T>(url: string, data = {}, config?: AxiosRequestConfig) => this.service.put<T>(url, data, config);

    patch = <T>(url: string, data = {}, config?: AxiosRequestConfig) => this.service.patch<T>(url, data, config);
}

export default AxiosService;
