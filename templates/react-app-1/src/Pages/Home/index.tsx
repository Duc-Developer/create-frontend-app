import { Navigate } from 'react-router';
import { ROUTER_PATHS } from '@src/Routes';

const Home = () => {
    return <Navigate to={ROUTER_PATHS.DASHBOARD} />;
};

export default Home;
