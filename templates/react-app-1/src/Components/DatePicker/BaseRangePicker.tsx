import { DatePicker, FormItemProps } from 'antd';
import { RangePickerProps } from 'antd/es/date-picker';
import React from 'react';
import BaseFormItem from '../Form';

const { RangePicker } = DatePicker;

export interface BaseRangePickerProps extends RangePickerProps {
    name: string;
    label?: React.ReactNode;
    formItemProps?: FormItemProps;
}

const BaseRangePicker = ({ label, name, formItemProps, ...props }: BaseRangePickerProps) => {
    return (
        <BaseFormItem label={label} name={name} {...formItemProps}>
            <RangePicker {...props} />
        </BaseFormItem>
    );
};

export default BaseRangePicker;
