import { Table } from 'antd';

const NewestPlan = () => {
    const tableData = Array.from({ length: 12 }, (_, i) => ({
        key: i + 1,
        id: i + 1,
        code: '00001',
        startDate: '10/03/2023',
        endDate: '15/10/2023',
        content: 'Kỹ thuật điện',
        type: 'Nội bộ',
    }));

    const columns = [
        { title: 'STT', dataIndex: 'id', key: 'id', width: 50 },
        { title: 'Mã', dataIndex: 'code', key: 'code' },
        { title: 'Thời gian bắt đầu', dataIndex: 'startDate', key: 'startDate' },
        { title: 'Thời gian kết thúc', dataIndex: 'endDate', key: 'endDate' },
        { title: 'Nội dung đào tạo', dataIndex: 'content', key: 'content' },
        { title: 'Loại hình đào tạo', dataIndex: 'type', key: 'type' },
        { title: 'Trạng thái', dataIndex: '', key: '', render: () => <div>hahahah</div> },
    ];

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg flex-1 col-span-2">
            <h2 className="text-lg font-semibold mb-4">Kế hoạch đào tạo mới nhất</h2>
            <div className="overflow-x-auto">
                <Table dataSource={tableData} columns={columns} pagination={{ pageSize: 5 }} />
            </div>
        </div>
    );
};

export default NewestPlan;
