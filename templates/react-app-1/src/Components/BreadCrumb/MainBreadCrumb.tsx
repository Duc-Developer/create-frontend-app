import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Breadcrumb } from 'antd';
import { matchPath, NavLink, useLocation } from 'react-router';
import { ROUTER_PATHS, routes } from '@src/Routes';
import './MainBreadCrumb.css';

const MainBreadCrumb = () => {
    const location = useLocation();

    const items = location.pathname
        .split('/')
        .filter(Boolean)
        .map((path, index, arr) => {
            const to = `/${arr.slice(0, index + 1).join('/')}`;
            const matchedRoute = routes.find((route) => route.path === to);
            const isActive = matchPath(location.pathname, to);
            const pathInfo = path === 'create' ? 'Thêm mới' : path;
            return {
                key: to,
                title: (
                    <NavLink
                        to={to}
                        className={
                            isActive ? 'font-semibold !text-gray-500' : 'font-semibold !text-secondary hover:!underline'
                        }
                    >
                        {matchedRoute?.title || pathInfo}
                    </NavLink>
                ),
            };
        });

    const home = {
        key: ROUTER_PATHS.ROOT,
        title: (
            <NavLink to={ROUTER_PATHS.ROOT} className="font-semibold text-secondary">
                <FontAwesomeIcon className="text-secondary" icon={faHouse} />
            </NavLink>
        ),
    };

    if (location.pathname === ROUTER_PATHS.ROOT || location.pathname === ROUTER_PATHS.DASHBOARD) {
        return null;
    }

    return <Breadcrumb className="main-breadcrumb" items={[home, ...items]} />;
};

export default MainBreadCrumb;
