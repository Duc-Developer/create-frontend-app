import { BaseResponse } from '@src/Models';
import { FormLogin, FormLoginResponse, UserInfo } from '@src/Models/auth';
import { BaseService } from '.';

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
