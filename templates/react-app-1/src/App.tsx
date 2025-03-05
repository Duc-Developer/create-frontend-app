import { observer } from 'mobx-react-lite';
import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import NotFound from './Pages/404';
import { routes } from './Routes';

const App = observer(() => {
    return (
        <Routes>
            {routes.map((route, index) => {
                const Component = route.main;
                const Layout = route.layout;
                const RouterWrapper =
                    route.wrapper ?? (({ children }: { children: React.ReactElement }) => <>{children}</>);
                if (Layout) {
                    return (
                        <Route
                            key={route.menuId ?? index}
                            path={route.path}
                            element={
                                <React.Suspense>
                                    <RouterWrapper>
                                        <Layout>
                                            <Component />
                                        </Layout>
                                    </RouterWrapper>
                                </React.Suspense>
                            }
                        />
                    );
                }
                return (
                    <Route
                        key={route.menuId ?? index}
                        path={route.path}
                        element={
                            <React.Suspense>
                                <RouterWrapper>
                                    <Component />
                                </RouterWrapper>
                            </React.Suspense>
                        }
                    />
                );
            })}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
});

export default App;
