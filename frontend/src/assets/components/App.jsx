// App.js
import Homepage from './Homepage';
import Sidebar from './Sidebar';
import Header from './Header';
import NewTask from './NewTask';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodaysTasks from './TodaysTasks';
import FinishedTasks from './FinishedTasks';
import UpcomingTasks from './UpcomingTasks';

const App = () => {
    const [tasks, setTasks] = useState([
        {
            title: "Buy Groceries",
            description: "Purchase milk, eggs, bread, and fruits.",
            startDate: "2024-10-23",
            dueDate: "2024-10-24",
            priority: "High",
            isFinished: false
        },
        {
            title: "Complete Project Report",
            description: "Finish the final report for the project and send it to the manager.",
            startDate: "2024-10-22",
            dueDate: "2024-10-28",
            priority: "Medium",
            isFinished: false
        },
        {
            title: "Schedule Doctor Appointment",
            description: "Call the clinic and schedule a yearly check-up.",
            startDate: "2024-10-24",
            dueDate: "2024-10-25",
            priority: "Low",
            isFinished: false
        },
        {
            title: "Plan Weekend Trip",
            description: "Research places to visit and make travel arrangements.",
            startDate: "2024-10-20",
            dueDate: "2024-10-26",
            priority: "Medium",
            isFinished: false
        },
        {
            title: "Update Resume",
            description: "Revise resume with the latest job experiences and skills.",
            startDate: "2024-10-27",
            dueDate: "2024-10-28",
            priority: "High",
            isFinished: false
        }
    ]);
    const [finishedTasks, setFinishedTasks] = useState([]);
    const [showNewTask, setShowNewTask] = useState(false);

    const handleNewTask = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
        setShowNewTask(false); 
    };

    const markTaskAsFinished = (task) => {
        setTasks((prevTasks) => prevTasks.filter((t) => t !== task));
        tasks.isFinished = true;
        setFinishedTasks((prevFinishedTasks) => [...prevFinishedTasks, task]);
    };

    return (
        <Router>
            <div id="container" className="grid grid-cols-[250px_1fr] grid-rows-[100px_1fr] h-screen">
                <Sidebar
                    onShowAllTasks={() => {}}
                    onShowTodaysTasks={() => {}}
                    onShowInput={() => setShowNewTask(true)}
                />
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Homepage
                                tasks={tasks}
                                onMarkTaskAsFinished={markTaskAsFinished}
                            />
                        }
                    />
                    <Route path="/todays-tasks" element={<TodaysTasks tasks={tasks} />} />
                    <Route path="/finished-tasks" element={<FinishedTasks tasks={finishedTasks} />} />
                    <Route path="/upcoming-tasks" element={<UpcomingTasks tasks={tasks} />} />
                </Routes>
                {showNewTask && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                        <NewTask onClose={() => setShowNewTask(false)} onSave={handleNewTask} />
                    </div>
                )}
            </div>
        </Router>
    );
};

export default App;
