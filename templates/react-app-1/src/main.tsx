import { QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider, theme } from 'antd';
import viVN from 'antd/lib/locale/vi_VN';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import BaseNotification from '@components/Notification/BaseNotification.tsx';
import { COLORS } from '@constants/theme.ts';
import App from './App.tsx';
import queryClient from './Services/queryClient.ts';
import './i18n.ts';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ConfigProvider
                theme={{
                    algorithm: theme.defaultAlgorithm,
                    token: {
                        ...COLORS,
                    },
                }}
                locale={viVN}
            >
                <BaseNotification>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </BaseNotification>
            </ConfigProvider>
        </QueryClientProvider>
    </React.StrictMode>,
);
