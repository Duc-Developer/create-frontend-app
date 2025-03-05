import { BaseResponse } from '@models/index';
import { FormLogin, FormLoginResponse, UserInfo } from '@models/auth';
import { BaseService } from './baseService';

const endpoint = 'auth';

class AuthService extends BaseService<BaseResponse> {
    constructor() {
        super(endpoint);
    }

    async login(data: FormLogin) {
        return this.post<FormLoginResponse>(data, { url: `${endpoint}/login` });
    }

    async getMyProfile() {
        this.get<BaseResponse<UserInfo>>(`${endpoint}/me`);
    }
}

const authService = new AuthService();
export default authService;
