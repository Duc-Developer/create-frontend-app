import { Modal, ModalFuncProps } from 'antd';

export interface BaseConfirmModalProps extends ModalFuncProps {}

const BaseConfirmModal = (props: BaseConfirmModalProps) => {
    return Modal.confirm({
        title: 'Xác nhận',
        okText: 'Đồng ý',
        cancelText: 'Bỏ qua',
        closable: true,
        ...props,
    });
};

export default BaseConfirmModal;
