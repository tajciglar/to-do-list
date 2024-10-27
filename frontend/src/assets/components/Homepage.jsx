// src/Homepage.jsx
import { useEffect, useState } from 'react';
import moment from 'moment';

moment.locale("en-gb");

const Homepage = () => {
    const initialTasks = [
        {
            title: "Buy Groceries",
            description: "Purchase milk, eggs, bread, and fruits.",
            startDate: "2024-10-23",
            dueDate: "2024-10-24",
            priority: "High"
        },
        {
            title: "Complete Project Report",
            description: "Finish the final report for the project and send it to the manager.",
            startDate: "2024-10-22",
            dueDate: "2024-10-28",
            priority: "Medium"
        },
        {
            title: "Schedule Doctor Appointment",
            description: "Call the clinic and schedule a yearly check-up.",
            startDate: "2024-10-24",
            dueDate: "2024-10-25",
            priority: "Low"
        },
        {
            title: "Plan Weekend Trip",
            description: "Research places to visit and make travel arrangements.",
            startDate: "2024-10-20",
            dueDate: "2024-10-26",
            priority: "Medium"
        },
        {
            title: "Update Resume",
            description: "Revise resume with the latest job experiences and skills.",
            startDate: "2024-10-18",
            dueDate: "2024-10-22",
            priority: "High"
        }
    ];

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(initialTasks);
    }, []);

    const formatDate = (inputDate) => {
        const dateParts = inputDate.split('-');
        if (dateParts.length === 3) {
            const year = dateParts[0];
            const month = dateParts[1];
            const day = dateParts[2];
            return `${day}-${month}-${year}`;
        }
        return inputDate;
    };

    return (
        <div id="content" className="grid grid-rows-[30px_1fr] p-4 ml-2">
            <div id="dateHolder" className="text-lg font-bold mb-4">
                {`TODAY ${moment().format('D/MM/YYYY')}`}
            </div>
            <div className="flex flex-col gap-6 ml-2">
                {tasks.length !== 0 ? (
                    tasks.map((task, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 border border-gray-300 p-4 rounded-lg shadow-md"
                        >
                            <h3 className="text-2xl font-semibold mb-2">{task.title}</h3>
                            <p className="text-gray-700 mb-2">{task.description}</p>
                            <div className="text-sm text-gray-500 space-x-4">
                                <span>Start: {formatDate(task.startDate)}</span>
                                <span>Due: {formatDate(task.dueDate)}</span>
                                <span className={`font-bold ${
                                    task.priority === 'High' ? 'text-red-500' : task.priority === 'Medium' ? 'text-yellow-500' : 'text-green-500'
                                }`}>
                                    Priority: {task.priority}
                                </span>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-500">No tasks available</div>
                )}
            </div>
        </div>
    );
};

export default Homepage;
