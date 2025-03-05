// import APP_CONFIGS from "@src/Constants/AppConfigs";
import type { AxiosResponse, InternalAxiosRequestConfig, AxiosRequestConfig, AxiosError } from 'axios';
import { HTTP_STATUS } from '@src/Constants/Http';
import AxiosService from './axiosService';

export class BaseService<T> {
    protected endpoint: string;
    protected controller: AxiosService = new AxiosService();

    constructor(endpoint: string) {
        this.endpoint = endpoint;
        this._init();
    }

    private _init() {
        this.controller = new AxiosService();
        const newInterceptors = this.controller.getService().interceptors;
        newInterceptors.request.use(this._handleRequest);
        newInterceptors.response.use(this._handleSuccess, this._handleError);
        this.controller.setInterceptors(newInterceptors);
    }

    private _handleRequest<T>(config: InternalAxiosRequestConfig<T>) {
        // you need set access token key in .env for used this feature
        // const accessToken = localStorage.getItem(APP_CONFIGS.ACCESS_TOKEN);
        // config.headers.Authorization =accessToken ? `Bearer ${accessToken}` : '';
        return config;
    }

    private _handleSuccess<T>(response: AxiosResponse<T>) {
        return response;
    }

    private async _refreshToken() {
        // Implement your token refresh logic here
        // For example, you can make a request to your refresh token endpoint
        const response = await this.controller.post('/auth/refresh-token', {
            // Include necessary data for refreshing the token
        });
        const newToken = (response.data as any).token;
        // Update your token storage with the new token
        // For example, localStorage.setItem('token', newToken);
        const defaultConfigs = this.controller.getService().defaults;
        defaultConfigs.headers.common['Authorization'] = `Bearer ${newToken}`;
    }

    private async _handleUnauthorized<T>(error: AxiosError<T>) {
        const { config: originalRequest = {}, response: { status } = {} } = error;
        if (status === HTTP_STATUS.UNAUTHORIZED && !(originalRequest as any)?._retry) {
            (originalRequest as any)._retry = true;
            try {
                await this._refreshToken();
                return this.controller.getService().request(originalRequest);
            } catch (refreshError) {
                return Promise.reject(refreshError);
            } finally {
                delete (originalRequest as any)._retry;
            }
        }
        return Promise.reject(error);
    }

    private _handleError<T>(error: AxiosError<T>) {
        if (error.response?.status === HTTP_STATUS.UNAUTHORIZED) {
            return this._handleUnauthorized(error);
        }
        throw error;
    }

    async get<I = unknown>(id: string = '', config?: AxiosRequestConfig) {
        return this.controller.get<T & I>(`${this.endpoint}${id ? '/' + id : ''}`, config);
    }

    async put<T = unknown>(id: string, data = {}, config?: AxiosRequestConfig) {
        const endpoint = config?.url ?? `${this.endpoint}/${id}`;
        return this.controller.put<T>(endpoint, data, config);
    }

    async post<T = unknown, TData = unknown>(data?: TData, config?: AxiosRequestConfig<TData>) {
        const endpoint = config?.url ?? this.endpoint;
        return this.controller.post<T>(endpoint, data ?? {}, config);
    }

    async delete(id: string) {
        return this.controller.delete(`${this.endpoint}/${id}`);
    }

    async patch(id: string) {
        return this.controller.patch(`${this.endpoint}/${id}`);
    }
}
