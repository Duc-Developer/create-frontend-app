import { Tag, TagProps } from 'antd';

export interface BaseTagProps extends TagProps {}
const BaseTag = ({ ...props }: BaseTagProps) => {
    return <Tag {...props} />;
};

export default BaseTag;
