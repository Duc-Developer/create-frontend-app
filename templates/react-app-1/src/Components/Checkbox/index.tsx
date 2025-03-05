import { Checkbox, CheckboxProps, FormItemProps } from 'antd';
import React from 'react';
import BaseFormItem from '../Form';

export interface BaseCheckboxProps extends CheckboxProps {
    name: string;
    label: React.ReactNode;
    formItemProps?: FormItemProps;
}

const BaseCheckbox: React.FC<BaseCheckboxProps> = ({ name, label, formItemProps, ...props }) => {
    return (
        <BaseFormItem label={label} name={name} {...formItemProps}>
            <Checkbox {...props} />
        </BaseFormItem>
    );
};

export default BaseCheckbox;
