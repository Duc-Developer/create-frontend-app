import { faBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar } from 'antd';
import { Input } from 'antd';
import { NavLink } from 'react-router';
import { ROUTER_PATHS } from '@src/Routes';
import MainBreadCrumb from '@components/BreadCrumb/MainBreadCrumb';
import iconSrc from '@assets/icons/react.svg';

const MainHeader = () => {
    return (
        <div className="flex justify-between items-center gap-8 p-2 bg-primary text-secondary shadow shadow-lg">
            <NavLink className="inline-flex items-center w-56" to={ROUTER_PATHS.ROOT}>
                <img src={iconSrc} alt="logo" />
            </NavLink>
            <MainBreadCrumb />
            <div className="flex grow items-center justify-end gap-2">
                <div className="w-48">
                    <Input size="middle" placeholder="Tìm kiếm..." prefix={<i className="pi pi-search" />} />
                </div>
                <FontAwesomeIcon icon={faBell} className="text-secondary text-2xl" />
                <div>
                    <span className="mr-2">Hi, Nguyễn Văn A</span>
                    <Avatar style={{ backgroundColor: '#2196F3', color: '#ffffff' }} size="large">
                        A
                    </Avatar>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;
