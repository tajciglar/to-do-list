import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Sidebar = ({  onShowInput }) => {
    const navigate = useNavigate();

    const handleShowAllTasks = () => {
        navigate("/"); // Update with your desired route
    };

    const handleShowTodaysTasks = () => {
        navigate('/todays-tasks'); // Update with your desired route
    };

    return (
        <div
            id="sideBar"
            className="row-span-3 bg-gray-800 text-white p-6 flex flex-col justify-between"
        >
            <div id="sideBarList">
                <ul className="space-y-4">
                    <li
                        onClick={handleShowAllTasks}
                        className="cursor-pointer hover:text-blue-400"
                    >
                        All Tasks
                    </li>
                    <li
                        onClick={handleShowTodaysTasks}
                        className="cursor-pointer hover:text-blue-400"
                    >
                        Today
                    </li>
                    <li className="cursor-pointer hover:text-blue-400">Upcoming</li>
                    <li className="cursor-pointer hover:text-blue-400">Finished</li>
                </ul>
            </div>
            <div id="newTask" className="mt-8">
                <button
                    onClick={onShowInput}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    NEW TASK
                </button>
            </div>
        </div>
    );
};

export default Sidebar;