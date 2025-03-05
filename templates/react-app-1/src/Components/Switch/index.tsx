import { FormItemProps, Switch, SwitchProps } from 'antd';
import React from 'react';
import BaseFormItem from '../Form';

export interface BaseSwitchProps extends SwitchProps {
    name: string;
    label: React.ReactNode;
    formItemProps?: FormItemProps;
}

const BaseSwitch: React.FC<BaseSwitchProps> = ({ name, label, formItemProps, ...props }) => {
    return (
        <BaseFormItem label={label} name={name} {...formItemProps}>
            <Switch {...props} />
        </BaseFormItem>
    );
};

export default BaseSwitch;
