import { BaseResponse } from '@src/Models';
import { FormRegister, FormRegisterResponse } from '@src/Models/auth';
import { BaseService } from '.';

const endpoint = 'users';

class UserService extends BaseService<BaseResponse> {
    constructor() {
        super(endpoint);
    }

    async register(data: FormRegister) {
        return this.post<FormRegisterResponse, FormRegister>(data, { url: `${endpoint}/register` });
    }

    async getListUser(params: any) {
        return this.get<BaseResponse>('', { params });
    }
}

const userService = new UserService();
export default userService;
