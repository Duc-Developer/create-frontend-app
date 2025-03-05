import { Tabs, TabsProps } from 'antd';

export interface BaseTabsProps extends TabsProps {}
const BaseTabs = ({ ...props }: BaseTabsProps) => {
    return <Tabs {...props} />;
};

export default BaseTabs;
