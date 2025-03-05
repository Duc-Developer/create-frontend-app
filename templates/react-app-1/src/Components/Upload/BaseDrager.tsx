import { FormItemProps, Upload } from 'antd';
import { DraggerProps } from 'antd/lib';
import BaseFormItem from '../Form';

const { Dragger } = Upload;
export interface BaseDraggerProps extends DraggerProps {
    name: string;
    label?: React.ReactNode;
    formItemProps?: FormItemProps;
}

const BaseDragger: React.FC<BaseDraggerProps> = ({ name, label, formItemProps, ...props }) => {
    return (
        <BaseFormItem label={label} name={name} {...formItemProps}>
            <Dragger {...props} />
        </BaseFormItem>
    );
};

export default BaseDragger;
