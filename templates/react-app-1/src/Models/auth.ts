import { BaseResponse } from '.';

export interface UserInfo {
    id: string;
    username: string;
    fullName: string;
    email: string;
    phoneNumber: string;
    employeeCode: string;
    position: {
        id: string;
        code: string;
        title: string;
    };
    department: {
        id: string;
        code: string;
        title: string;
    };
    effectedDate: string;
    expiredDate: string;
    status: string;
}

export interface FormRegister {
    username: string;
    fullName: string;
    password: string;
    email: string;
    phoneNumber: string;
    employeeCode: string;
    positionId: string;
    departmentId: string;
    effectedDate: string;
    expiredDate: string;
    status: string;
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
