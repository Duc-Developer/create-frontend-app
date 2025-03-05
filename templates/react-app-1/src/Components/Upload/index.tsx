import { FormItemProps, Upload } from 'antd';
import type { UploadProps } from 'antd/es/upload';
import BaseFormItem from '../Form';

export interface BaseUploadProps extends UploadProps {
    name: string;
    label?: React.ReactNode;
    formItemProps?: FormItemProps;
}

const BaseUpload: React.FC<BaseUploadProps> = ({ name, label, formItemProps, ...props }) => {
    return (
        <BaseFormItem label={label} name={name} {...formItemProps}>
            <Upload {...props} />
        </BaseFormItem>
    );
};

export default BaseUpload;
