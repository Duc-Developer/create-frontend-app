import { Form, FormItemProps } from 'antd';

export interface BaseFormItemProps extends FormItemProps {}

const BaseFormItem: React.FC<BaseFormItemProps> = (props) => {
    return <Form.Item className="!mb-0" {...props} />;
};

export default BaseFormItem;
