import { faCircleChevronLeft, faCircleChevronRight, faHouse, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from 'antd';
import classNames from 'classnames';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { ROUTER_PATHS } from '@src/Routes';
import './MainMenu.css';

const MainMenu = () => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [openKeys, setOpenKeys] = useState<string[]>([]);

    const isActive = (path: string) => {
        if (path === ROUTER_PATHS.ROOT) {
            return location.pathname === path;
        }
        return location.pathname.includes(path);
    };

    const items = [
        {
            key: ROUTER_PATHS.DASHBOARD,
            label: 'Trang chủ',
            icon: <FontAwesomeIcon icon={faHouse} className="!text-xl" />,
            className: isActive(ROUTER_PATHS.DASHBOARD) ? 'active' : '',
        },
        {
            key: 'jobs',
            label: 'Công việc',
            icon: <FontAwesomeIcon icon={faListCheck} className="!text-xl" />,
            children: [
                {
                    key: '1',
                    label: 'Giỏ công việc',
                    title: 'Giỏ công việc',
                    className: isActive('1') ? 'active' : '',
                },
                {
                    key: '2',
                    label: 'Quản lý phân việc',
                    title: 'Quản lý phân việc',
                    className: isActive('2') ? 'active' : '',
                },
                {
                    key: '3',
                    label: 'Theo dõi tiến độ',
                    title: 'Theo dõi tiến độ',
                    className: isActive('3') ? 'active' : '',
                },
            ],
        },
    ];

    return (
        <div
            className={classNames(
                'main-menu relative !rounded-none h-[calc(100vh_-_3.5em)] shadow-lg',
                collapsed ? 'main-menu--label-hidden !w-16' : 'w-64',
            )}
        >
            <Menu
                openKeys={openKeys}
                onOpenChange={setOpenKeys}
                mode="inline"
                items={items}
                inlineIndent={16}
                onClick={({ key }) => navigate(key)}
                className="main-menu__menu h-full overflow-y-auto"
            />
            <FontAwesomeIcon
                className={classNames(
                    'absolute top-3 -right-3',
                    'block aspect-square text-primary text-center cursor-pointer rounded-full text-2xl',
                    'border-2 border-secondary z-10 bg-secondary',
                )}
                icon={collapsed ? faCircleChevronRight : faCircleChevronLeft}
                onClick={() => {
                    setCollapsed(!collapsed);
                    setOpenKeys([]);
                }}
            />
        </div>
    );
};

export default MainMenu;
