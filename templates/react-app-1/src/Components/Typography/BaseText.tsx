import { Typography } from 'antd';
import { TextProps } from 'antd/es/typography/Text';

const { Text } = Typography;
export interface BaseTextProps extends TextProps {}
const BaseText = (props: BaseTextProps) => {
    return <Text {...props} />;
};

export default BaseText;
