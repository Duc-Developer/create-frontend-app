import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { Form } from 'antd';
import { FormProviderProps } from 'antd/es/form/context';
import { AxiosResponse } from 'axios';
import classNames from 'classnames';
import { useNavigate } from 'react-router';
import { FormLogin, FormLoginResponse } from '@src/Models/auth';
import { ROUTER_PATHS } from '@src/Routes';
import BaseEmail from '@components/BaseEmail';
import BasePassword from '@components/BasePassword';
import BaseButton from '@components/Button';
import { BaseNoticeRef } from '@components/Notification/BaseNotification';
import authService from '@services/authService';
import logoIcon from '@assets/icons/react.svg';
import bgSrc from '@assets/images/sigin_background.jpg';
import APP_CONFIGS from '@constants/AppConfigs';

const Signin = () => {
    const navigate = useNavigate();
    const backgroundImageUrl = new URL(bgSrc, import.meta.url).href;

    const mutationOptions: UseMutationOptions<AxiosResponse<FormLoginResponse>, any, FormLogin> = {
        mutationKey: ['login'],
        mutationFn: async (payload) => {
            try {
                const response = await authService.login(payload);
                return response;
            } catch (error) {
                console.log({ error });
                throw error;
            }
        },
        onSuccess: ({ data }) => {
            const { accessToken } = data?.data ?? {};
            if (!accessToken) throw new Error('Không có access token');
            localStorage.setItem(APP_CONFIGS.ACCESS_TOKEN, accessToken);
            BaseNoticeRef.current?.open('success', { message: 'Đăng nhập thành công' });
            navigate(ROUTER_PATHS.DASHBOARD);
        },
        onError: (err) => {
            console.error(err);
            BaseNoticeRef.current?.open('error', { message: 'Đăng nhập thất bại' });
        },
    };

    const { mutate: login, isPending } = useMutation<AxiosResponse<FormLoginResponse>, any, FormLogin>(mutationOptions);

    const onSubmit: FormProviderProps['onFormFinish'] = (_, { values }) => {
        const { email, password } = values;
        login({ username: email, password });
    };

    return (
        <div
            className="bg-cover bg-center h-screen flex items-center justify-center shadow shadow-lg"
            style={{
                backgroundImage: `url(${backgroundImageUrl})`,
            }}
        >
            <Form.Provider onFormFinish={onSubmit}>
                <Form
                    name="layout-multiple-horizontal"
                    layout="horizontal"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    className={classNames(
                        'bg-white bg-opacity-90',
                        'w-[calc(100vw_-_2rem)] max-w-128',
                        'rounded-lg shadow-lg !p-8',
                    )}
                >
                    <h1 className="text-center text-2xl font-bold">ĐĂNG NHẬP</h1>
                    <div className="m-auto w-fit flex items-center gap-2 mt-4">
                        <img src={logoIcon} alt="logo" width={64} />
                    </div>
                    <BaseEmail
                        formItemProps={{
                            className: '!mb-4',
                        }}
                        rules={[{ required: true, message: 'Vui lòng nhập email' }]}
                        size="large"
                        label="Email"
                        placeholder="Nhập địa chỉ email"
                        name="email"
                        aria-describedby="email-help"
                    />
                    <BasePassword
                        size="large"
                        formItemProps={{
                            className: '!mb-8',
                            labelCol: { span: 24 },
                            rules: [{ required: true, message: 'Mật khẩu là bắt buộc' }],
                        }}
                        label="Password"
                        placeholder="Nhập mật khẩu"
                        name="password"
                        aria-describedby="password-help"
                    />
                    <div className="w-full flex flex-col gap-2">
                        <BaseButton
                            loading={isPending}
                            type="primary"
                            size="large"
                            htmlType="submit"
                            className="w-full"
                        >
                            Đăng nhập
                        </BaseButton>
                        <BaseButton type="default" size="large" className="w-full">
                            Đăng nhập bằng tài khoản công ty
                        </BaseButton>
                    </div>
                </Form>
            </Form.Provider>
        </div>
    );
};

export default Signin;
