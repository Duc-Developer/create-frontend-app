import classNames from 'classnames';
import BaseTag, { BaseTagProps } from './BaseTag';

export interface ProgressTagProps extends BaseTagProps {
    status: 'inProgress' | 'done' | 'notStarted' | 'overdue';
}
const ProgressTag = ({ ...props }: ProgressTagProps) => {
    return (
        <BaseTag
            className={classNames({
                '!bg-cyan-400': props.status === 'inProgress',
                '!bg-green-400': props.status === 'done',
                '!bg-red-400': props.status === 'overdue',
                '!bg-gray-100': props.status === 'notStarted',
            })}
            {...props}
        />
    );
};

export default ProgressTag;
