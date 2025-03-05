import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBorderAll, faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NewestPlan from './Components/NewestPlan';
import TrainingPlan from './Components/TrainingPlan';

const Dashboard = () => {
    return (
        <div className="grid grid-cols-3 gap-8 p-4">
            <div className="bg-red-600 p-6 flex gap-4 justify-between rounded-md">
                <div className="flex flex-col items-start gap-2 justify-evenly text-secondary w-full">
                    <FontAwesomeIcon icon={faUser} className="text-4xl" />
                    <span className="font-semibold text-xl">Tổng số tài khoản</span>
                    <strong className="text-2xl">300</strong>
                </div>
                <div className="bg-white p-8 rounded-md flex flex-col justify-evenly font-semibold w-full">
                    <span className="text-red-600 text-2xl">40</span>
                    <span className="text-gray-500">Giảng viên</span>
                    <span className="text-red-600 text-2xl">260</span>
                    <span className="text-gray-500">Học viên</span>
                </div>
            </div>
            <div className="bg-blue-600 p-6 flex gap-4 justify-between rounded-md">
                <div className="flex flex-col gap-2 items-start justify-evenly text-secondary w-full">
                    <FontAwesomeIcon icon={faBorderAll} className="text-4xl" />
                    <span className="font-semibold text-xl">Tổng số lượng quy trình</span>
                    <strong className="text-2xl">4</strong>
                </div>
                <div className="bg-white p-8 rounded-md flex flex-col justify-evenly font-semibold w-full">
                    <span className="text-blue-600 text-2xl">3</span>
                    <span className="text-gray-500">Đang triển khai</span>
                    <span className="text-red-600 text-2xl">1</span>
                    <span className="text-gray-500">Ngưng</span>
                </div>
            </div>
            <div className="bg-green-600 p-6 flex gap-4 justify-between rounded-md">
                <div className="flex flex-col gap-2 items-start justify-evenly text-secondary w-full">
                    <FontAwesomeIcon icon={faChartSimple} className="text-4xl" />
                    <span className="font-semibold text-xl">Tổng phí đào tạo</span>
                    <strong className="text-xl">1.000.000.000 VNĐ</strong>
                </div>
                <div className="bg-white p-8 rounded-md flex flex-col justify-evenly font-semibold w-full">
                    <span className="text-green-600 text-2xl">500.000.000 VNĐ</span>
                    <span className="text-gray-500">Thu</span>
                    <span className="text-red-600 text-2xl">500.000.000 VNĐ</span>
                    <span className="text-gray-500">Chi</span>
                </div>
            </div>
            <TrainingPlan />
            <NewestPlan />
        </div>
    );
};

export default Dashboard;
