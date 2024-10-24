// src/Sidebar.jsx

const Sidebar = ({ onShowAllTasks, onShowTodaysTasks, onShowInput }) => {
    return (
        <div id="sideBar">
            <div id="user">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
                <span>User name</span>
            </div>
            <div id="sideBarList">
                <ul>
                    <li onClick={onShowAllTasks}>All Tasks</li>
                    <li onClick={onShowTodaysTasks}>Today</li>
                    <li>Upcoming</li>
                    <li>Finished</li>
                </ul>
            </div>
            <div id="newTask">
                <button onClick={onShowInput}>NEW TASK</button>
            </div>
        </div>
    );
};

export default Sidebar;
