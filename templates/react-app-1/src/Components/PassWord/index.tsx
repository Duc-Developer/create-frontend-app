import { FormItemProps, Input } from 'antd';
import type { PasswordProps } from 'antd/es/input';
import BaseFormItem from '../Form';

const { Password } = Input;

export interface BasePasswordProps extends PasswordProps {
    name: string;
    label: React.ReactNode;
    formItemProps?: FormItemProps;
}

const BasePassword: React.FC<BasePasswordProps> = ({ name, label, formItemProps, ...props }) => {
    return (
        <BaseFormItem label={label} name={name} {...formItemProps}>
            <Password {...props} />
        </BaseFormItem>
    );
};

export default BasePassword;
