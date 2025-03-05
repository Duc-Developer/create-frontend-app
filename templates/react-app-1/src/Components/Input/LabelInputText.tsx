import { FormItemProps, Input, InputProps } from 'antd';
import BaseFormItem from '../Form';

export interface BaseInputProps extends InputProps {
    name: string;
    label?: React.ReactNode;
    formItemProps?: FormItemProps;
}

const BaseInput = ({ name, label, formItemProps, ...props }: BaseInputProps) => {
    return (
        <BaseFormItem label={label} name={name} {...formItemProps}>
            <Input {...props} />
        </BaseFormItem>
    );
};

export default BaseInput;
