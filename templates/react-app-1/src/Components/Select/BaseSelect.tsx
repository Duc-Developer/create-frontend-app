import { FormItemProps, Select, SelectProps } from 'antd';
import BaseFormItem from '../Form';

export interface BaseSelectProps extends SelectProps {
    name: string;
    label?: React.ReactNode;
    formItemProps?: FormItemProps;
}

const BaseSelect = ({ name, label, formItemProps, ...props }: BaseSelectProps) => {
    return (
        <BaseFormItem label={label} name={name} {...formItemProps}>
            <Select {...props} />
        </BaseFormItem>
    );
};

export default BaseSelect;
