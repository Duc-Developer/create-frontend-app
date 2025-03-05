import { Modal, ModalProps } from 'antd';
import React from 'react';

export interface BaseModalProps extends ModalProps {}

const BaseModal: React.FC<BaseModalProps> = (props) => {
    return <Modal {...props} />;
};

export default BaseModal;
