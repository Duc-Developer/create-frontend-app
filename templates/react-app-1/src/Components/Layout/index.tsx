import React from 'react';
import MainHeader from '@components/Layout/MainHeader';
import MainMenu from './MainMenu';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section>
            <MainHeader />
            <div className="app-body flex">
                <div className="app-menu">
                    <MainMenu />
                </div>
                <div className="app-content grow p-5 bg-gray-200">
                    <div className="app-content__overlay h-[calc(100vh_-_6rem)] rounded overflow-auto">{children}</div>
                </div>
            </div>
        </section>
    );
};

export default Layout;
