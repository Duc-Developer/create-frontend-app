import { DatePicker, FormItemProps } from 'antd';
import { DatePickerProps } from 'antd/es/date-picker';
import React from 'react';
import BaseFormItem from '../Form';

export interface BaseDatePickerProps extends DatePickerProps {
    name: string;
    label?: React.ReactNode;
    formItemProps?: FormItemProps;
}

const BaseDatePicker = ({ label, name, formItemProps, ...props }: BaseDatePickerProps) => {
    return (
        <BaseFormItem label={label} name={name} {...formItemProps}>
            <DatePicker {...props} />
        </BaseFormItem>
    );
};

export default BaseDatePicker;
