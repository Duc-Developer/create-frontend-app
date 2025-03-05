import { Button, ButtonProps } from 'antd';

export interface BaseButtonProps extends ButtonProps {}
const BaseButton = (props: BaseButtonProps) => {
    return <Button {...props} />;
};

export default BaseButton;
