import { Typography } from 'antd';
import { TitleProps } from 'antd/es/typography/Title';

const { Title } = Typography;
export interface BaseTitleProps extends TitleProps {}
const BaseTitle = (props: BaseTitleProps) => {
    return <Title {...props} />;
};

export default BaseTitle;
