import { FormItemProps, Radio, RadioProps } from 'antd';
import classNames from 'classnames';
import React from 'react';
import BaseFormItem from '../Form';

export interface BaseRadioGroupProps extends RadioProps {
    name: string;
    label?: React.ReactNode;
    formItemProps?: FormItemProps;
    className?: string;
}
const BaseRadioGroup = ({ label, name, className, formItemProps, ...props }: BaseRadioGroupProps) => {
    return (
        <BaseFormItem label={label} name={name} {...formItemProps}>
            <Radio.Group className={classNames('bg-gray-200 rounded-md !p-2 w-full', className)} {...props} />
        </BaseFormItem>
    );
};

export default BaseRadioGroup;
