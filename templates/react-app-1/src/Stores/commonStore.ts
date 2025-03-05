import { reaction, makeAutoObservable } from 'mobx';
import authService from '@src/Services/authService';

class CommonStore {
    appName = 'React App';
    token = '';
    appLoaded = false;

    isLoading = false;

    constructor() {
        makeAutoObservable(this);
        reaction(
            () => this.token,
            (token: string) => {
                if (token) {
                    window.localStorage.setItem('jwt', token);
                } else {
                    window.localStorage.removeItem('jwt');
                }
            },
        );
    }

    async loadProfile() {
        this.isLoading = true;
        return authService.getMyProfile().finally(() => (this.isLoading = false));
    }

    setToken(token: string) {
        this.token = token;
    }

    setAppLoaded() {
        this.appLoaded = true;
    }
}

export default CommonStore;
