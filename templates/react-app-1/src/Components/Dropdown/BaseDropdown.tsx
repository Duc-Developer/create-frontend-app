import { Dropdown, DropdownProps } from 'antd';

export interface BaseDropdownProps extends DropdownProps {}
const BaseDropdown = ({ ...props }: BaseDropdownProps) => {
    return <Dropdown {...props} />;
};

export default BaseDropdown;
