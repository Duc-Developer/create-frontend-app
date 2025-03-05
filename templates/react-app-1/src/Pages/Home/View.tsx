import { useNavigate } from 'react-router';
import BaseButton from '@src/Components/Button';
import { ROUTER_PATHS } from '@src/Routes';
import commonStore from '@src/Stores/commonStore';
import iconSrc from '@assets/icons/react.svg';
import Footer from './Components/Footer';
import Header from './Components/Header';

const View = () => {
    const store = new commonStore();
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center">
                <h1>{store.appName}</h1>
                <img src={iconSrc} alt="logo" />
                <BaseButton icon="pi pi-check" onClick={() => navigate(ROUTER_PATHS.SIGNIN)}>
                    Đăng nhập
                </BaseButton>
            </div>
            <Footer />
        </>
    );
};

export default View;
