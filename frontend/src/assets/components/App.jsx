// src/App.jsx
import Homepage from './Homepage';
import Sidebar from './Sidebar';
import '../styles/App.css'
import Header from './Header';
import NewTask from './NewTask';
import { useState } from 'react';
const App = () => {

    const [showNewTask, setShowNewTask] = useState(false);
    const handleShowAllTasks = () => {
        // Logic to show all tasks
    };

    const handleShowTodaysTasks = () => {
        // Logic to show today's tasks
    };

    const handleShowInput = () => {
        setShowNewTask(true);
    }

    const handleCloseInput = () => {
        setShowNewTask(false)
    }

    return (
        
        <div id="container" className="grid grid-cols-[250px_1fr] grid-rows-[100px_1fr] h-screen">
            <Sidebar className="col-span-1 row-span-2"
                onShowAllTasks={handleShowAllTasks}
                onShowTodaysTasks={handleShowTodaysTasks}
                onShowInput={handleShowInput}
            />
            <Header className="col-start-2 row-start-1"/>
            <Homepage className="col-start-2 row-start-2"/>
            { showNewTask && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <NewTask onClose={handleCloseInput} />
                </div>
            )}
        </div>
    );
};

export default App;
