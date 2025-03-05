import { FormItemProps, InputNumber, InputNumberProps } from 'antd';
import React from 'react';
import BaseFormItem from '../Form';

export interface BaseInputNumberProps extends InputNumberProps {
    name: string;
    label: React.ReactNode;
    formItemProps?: FormItemProps;
}

const BaseInputNumber: React.FC<BaseInputNumberProps> = ({ name, label, formItemProps, ...props }) => {
    return (
        <BaseFormItem label={label} name={name} {...formItemProps}>
            <InputNumber {...props} />
        </BaseFormItem>
    );
};

export default BaseInputNumber;
