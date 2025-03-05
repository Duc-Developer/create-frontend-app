import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

const manualChunks = (id: string) => {
    if (id.includes('node_modules')) {
        if (id.includes('lodash')) {
            return 'lodash';
        }
        if (id.includes('@tanstack/react-query')) {
            return 'react-query';
        }
        if (id.includes('mobx')) {
            return 'mobx';
        }
        if (id.includes('axios')) {
            return 'axios';
        }
        if (id.includes('i18next')) {
            return 'i18next';
        }
        if (id.includes('dayjs')) {
            return 'dayjs';
        }
        if (id.includes('classnames')) {
            return 'classnames';
        }
        if (id.includes('chart.js') || id.includes('chartjs')) {
            return 'chartjs';
        }
        if (id.includes('@fortawesome')) {
            return 'fortawesome';
        }
        if (id.includes('tailwindcss')) {
            return 'tailwindcss';
        }
        if (id.includes('i18next')) {
            return 'i18next';
        }
        return 'vendor';
    }
};

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(), '')
    const port = Number(env.VITE_REACT_APP_PORT) || 3000;
    const host = env.VITE_REACT_APP_HOST || undefined;
    return {
        server: {
            host,
            port,
        },
        resolve: {
            alias: {
                '@src': path.resolve(__dirname, 'src'),
                '@pages': path.resolve(__dirname, 'src/Pages'),
                '@public': path.resolve(__dirname, 'public'),
                '@components': path.resolve(__dirname, 'src/Components'),
                '@stores': path.resolve(__dirname, 'src/Stores'),
                '@services': path.resolve(__dirname, 'src/Services'),
                '@utilities': path.resolve(__dirname, 'src/Utilities'),
                '@assets': path.resolve(__dirname, 'src/assets'),
                '@hooks': path.resolve(__dirname, 'src/Hooks'),
                '@constants': path.resolve(__dirname, 'src/Constants'),
            },
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        },
        plugins: [
            react(),
            tailwindcss(),
            {
                name: 'disable-import-analysis',
                enforce: 'pre',
                apply: 'build',
                configureServer(server) {
                    server.middlewares.use((req, res, next) => {
                        if (req.url?.includes('plugin=vite:import-analysis')) {
                            res.statusCode = 404;
                            res.end();
                        } else {
                            next();
                        }
                    });
                },
            },
            ...[
                mode === 'local' && visualizer({
                    filename: 'bundle-visualizer.html',
                    open: true,
                })
            ],
        ],
        build: {
            chunkSizeWarningLimit: 1600,
            minify: mode !== 'development',
            sourcemap: mode === 'development',
            rollupOptions: {
                output: {
                    manualChunks,
                },
            },
        },
        define: {
            VITE_REACT_APP_API_URL: JSON.stringify(env.VITE_REACT_APP_API_URL),
            VITE_REACT_APP_ACCESS_TOKEN: JSON.stringify(env.VITE_REACT_APP_ACCESS_TOKEN),
        },
    };
});
