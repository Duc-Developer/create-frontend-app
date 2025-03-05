import { BaseResponse } from '.';

export interface UserInfo {
    id: string;
    username: string;
    fullName: string;
    status: string;
}

export interface FormRegister {
    username: string;
    password: string;
}

export interface FormRegisterResponse extends BaseResponse<UserInfo> {}

export interface FormLogin {
    username: string;
    password: string;
}

export interface FormLoginResponse
    extends BaseResponse<{
        accessToken: string;
        expiresIn: number;
    }> {}
