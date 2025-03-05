import { Table, TableProps } from 'antd';
import classNames from 'classnames';
import './index.css';

export interface BaseTableProps<T> extends TableProps<T> {}

const BaseTable = <T extends object>({ className, pagination, ...props }: BaseTableProps<T>) => {
    return (
        <Table
            className={classNames('base-table', className)}
            pagination={{
                showSizeChanger: true,
                showQuickJumper: true,
                ...pagination,
            }}
            {...props}
        />
    );
};

export default BaseTable;
