import { ArcElement, Chart, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend);

const chartData = {
    labels: ['Đã hoàn thành', 'Đang tiến hành', 'Đã quá hạn'],
    datasets: [
        {
            data: [70, 40, 10],
            backgroundColor: ['#22c55e', '#3b82f6', '#facc15'],
            hoverOffset: 4,
        },
    ],
};

const TrainingPlan = () => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg ">
            <h2 className="text-lg font-semibold mb-4">Thống kê kế hoạch đào tạo</h2>
            <div className="text-gray-600 grid grid-cols-2 gap-4">
                <p className="flex flex-col gap-2">
                    <span>Tổng kế hoạch đào tạo</span>
                    <span className="font-bold text-lg">120</span>
                </p>
                <p className="flex flex-col gap-2 ">
                    <span>Đã hoàn thành</span>
                    <span className="font-bold text-green-600">70</span>
                </p>
                <p className="flex flex-col gap-2 ">
                    <span>Đang tiến hành</span>
                    <span className="font-bold text-blue-600">40</span>
                </p>
                <p className="flex flex-col gap-2 ">
                    <span>Đã quá hạn</span>
                    <span className="font-bold text-red-600">10</span>
                </p>
            </div>
            <div className="card flex justify-center items-center mt-6">
                <Doughnut data={chartData} />
            </div>
        </div>
    );
};

export default TrainingPlan;
