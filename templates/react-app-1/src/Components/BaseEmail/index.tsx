import { FormItemProps, Input } from 'antd';
import type { InputProps } from 'antd/es/input';
import { REGEX } from '@src/Constants/validations';
import BaseFormItem from '../Form';

export interface BaseEmailProps extends InputProps {
    name: string;
    label: React.ReactNode;
    formItemProps?: Omit<FormItemProps, 'rules'>;
    rules?: FormItemProps['rules'];
}

const BaseEmail = ({ name, label, formItemProps, rules, ...props }: BaseEmailProps) => {
    return (
        <BaseFormItem
            label={label}
            name={name}
            rules={[
                {
                    pattern: REGEX.EMAIL,
                    message: 'Email không hợp lệ',
                },
                ...(rules ?? []),
            ]}
            {...formItemProps}
        >
            <Input {...props} />
        </BaseFormItem>
    );
};

export default BaseEmail;
