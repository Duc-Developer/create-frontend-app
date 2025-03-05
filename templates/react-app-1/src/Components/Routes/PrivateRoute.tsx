import React from 'react';
import { Navigate } from 'react-router';
import APP_CONFIGS from '@src/Constants/AppConfigs';
import { ROUTER_PATHS } from '@src/Routes';

const PrivateRoute = ({ children }: { children: React.ReactElement }) => {
    const accessToken = localStorage.getItem(APP_CONFIGS.ACCESS_TOKEN);
    if (!accessToken) {
        return <Navigate to={ROUTER_PATHS.SIGNIN} />;
    }
    return <>{children}</>;
};

export default PrivateRoute;
