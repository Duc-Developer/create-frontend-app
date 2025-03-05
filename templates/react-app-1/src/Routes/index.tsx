import React from 'react';
import PrivateRoute from '@src/Components/Routes/PrivateRoute';
import PublicRoute from '@src/Components/Routes/PublicRoute';

const Signin = React.lazy(() => import('@pages/Auth/Signin'));
const Home = React.lazy(() => import('@pages/Home'));
const Dashboard = React.lazy(() => import('@pages/Dashboard/index'));

export const ROUTER_PATHS = {
    ROOT: '/',
    SIGNIN: '/signin',

    DASHBOARD: '/dashboard',
};

const LAYOUT = {
    DEFAULT: React.lazy(() => import('@components/Layout')),
    NONE: ({ children }: { children: React.ReactNode }) => <>{children}</>,
};

const ROUTER_WRAPPER = {
    PRIVATE: PrivateRoute,
    PUBLIC: PublicRoute,
};

interface RouterItem {
    path: string;
    wrapper: React.ComponentType<any>;
    exact?: boolean;
    main: React.ComponentType<any>;
    menuId: string;
    layout: React.ComponentType<any>;
    title: string;
}

export const routes: RouterItem[] = [
    {
        path: ROUTER_PATHS.ROOT,
        wrapper: ROUTER_WRAPPER.PUBLIC,
        exact: true,
        main: Home,
        menuId: '-99',
        layout: LAYOUT.DEFAULT,
        title: 'Trang chủ',
    },
    {
        path: ROUTER_PATHS.SIGNIN,
        wrapper: ROUTER_WRAPPER.PUBLIC,
        exact: true,
        main: Signin,
        menuId: '1',
        layout: LAYOUT.NONE,
        title: 'Đăng nhập',
    },
    {
        path: ROUTER_PATHS.DASHBOARD,
        exact: true,
        main: Dashboard,
        menuId: '3',
        layout: LAYOUT.DEFAULT,
        title: 'Dashboard',
        wrapper: ROUTER_WRAPPER.PRIVATE,
    },
];
