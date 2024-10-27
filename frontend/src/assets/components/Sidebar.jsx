// eslint-disable-next-line react/prop-types
const Sidebar = ({ onShowAllTasks, onShowTodaysTasks, onShowInput }) => {


    return (
        <div
            id="sideBar"
            className="row-span-3 bg-gray-800 text-white p-6 flex flex-col justify-between"
        >
            <div id="sideBarList">
                <ul className="space-y-4">
                    <li
                        onClick={onShowAllTasks}
                        className="cursor-pointer hover:text-blue-400"
                    >
                        All Tasks
                    </li>
                    <li
                        onClick={onShowTodaysTasks}
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