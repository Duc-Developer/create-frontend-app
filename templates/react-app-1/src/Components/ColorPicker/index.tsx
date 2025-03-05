import { ColorPicker, ColorPickerProps, FormItemProps } from 'antd';
import React from 'react';
import BaseFormItem from '../Form';

export interface BaseColorPickerProps extends ColorPickerProps {
    name: string;
    label: React.ReactNode;
    formItemProps?: FormItemProps;
}

const BaseColorPicker: React.FC<BaseColorPickerProps> = ({ name, label, formItemProps, ...props }) => {
    return (
        <BaseFormItem label={label} name={name} {...formItemProps}>
            <ColorPicker {...props} />
        </BaseFormItem>
    );
};

export default BaseColorPicker;
