import { AxiosInterceptorManager, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export interface AxiosInterceptors {
    request: AxiosInterceptorManager<InternalAxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
}

export interface BaseResponse<T = any> {
    data: T;
    status: number;
    message?: string;
}
