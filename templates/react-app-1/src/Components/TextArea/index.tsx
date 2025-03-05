import { FormItemProps, Input } from 'antd';
import type { TextAreaProps } from 'antd/es/input';
import BaseFormItem from '../Form';

const { TextArea } = Input;

export interface BaseTextAreaProps extends TextAreaProps {
    name: string;
    label: React.ReactNode;
    formItemProps?: FormItemProps;
}

const BaseTextArea: React.FC<BaseTextAreaProps> = ({ name, label, formItemProps, ...props }) => {
    return (
        <BaseFormItem label={label} name={name} {...formItemProps}>
            <TextArea {...props} />
        </BaseFormItem>
    );
};

export default BaseTextArea;
