import {
    faCircleCheck,
    faCircleExclamation,
    faCircleInfo,
    faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { notification } from 'antd';
import React, { forwardRef, useImperativeHandle } from 'react';

const STYLES = {
    success: {
        backgroundColor: '#ffffff',
        color: 'var(--color-success)',
        icon: <FontAwesomeIcon icon={faCircleCheck} />,
    },
    info: {
        backgroundColor: '#ffffff',
        color: 'var(--color-info)',
        icon: <FontAwesomeIcon icon={faCircleInfo} />,
    },
    warning: {
        backgroundColor: '#ffffff',
        color: 'var(--color-warning)',
        icon: <FontAwesomeIcon icon={faCircleExclamation} />,
    },
    error: {
        backgroundColor: '#ffffff',
        color: 'var(--color-error)',
        icon: <FontAwesomeIcon icon={faTriangleExclamation} />,
    },
};

type MessageNoticeType = 'success' | 'info' | 'warning' | 'error';
const Notice = forwardRef(({ children }: { children: React.ReactNode }, ref: any) => {
    const [api, contextHolder] = notification.useNotification();
    const openNotification = (
        type: MessageNoticeType | string,
        { description, message }: { description?: React.ReactNode; message?: React.ReactNode },
    ) => {
        if (['success', 'info', 'warning', 'error'].includes(type)) {
            api[type as MessageNoticeType]({
                message,
                description,
                style: STYLES[type as MessageNoticeType],
                className: 'rounded',
            });
        }
    };
    useImperativeHandle(ref, () => ({
        open: openNotification,
    }));
    return (
        <>
            {' '}
            {contextHolder}
            {children}
        </>
    );
});

export const BaseNoticeRef = React.createRef<any>();
const BaseNotification = (props: any) => <Notice {...props} ref={BaseNoticeRef} />;
export default BaseNotification;
