// src/Homepage.jsx
import  { useEffect, useState } from 'react';
import moment from 'moment';
// import { allTasks } from './newTask'; // Ensure this exports the task list

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

    

    // const [dates, setDates] = useState([]);

    useEffect(() => {
        setTasks(initialTasks);
    }, []);

    // const showAllTasks = (allTasks) => {
    //     getDates(allTasks);
    //     setTasks(allTasks);
    // };



    // const getDates = (allTasks) => {
    //     const formattedDates = allTasks.map(value => formatDate(value.startDate));
    //     setDates(formattedDates);
    // };

    const formatDate = (inputDate) => {
        const dateParts = inputDate.split('-');
        if (dateParts.length === 3) {
            const year = dateParts[0];
            const month = dateParts[1];
            const day = dateParts[2];
            return `${day}-${month}-${year}`;
        }
        return inputDate; // Return original if format is unexpected
    };

    return (
        <div id="content">
            <div id="dateHolder">
                {`TODAY ${moment().format('D/MM/YYYY')}`}
            </div>
            <div className='taskDisplay' style={{ display: 'flex', flexDirection: 'column', gap: '5%' }}>
                { tasks.length != 0 ? (
                    tasks.map((task, index) => (
                        <div key={index} id="task" style={{ border: '1px solid black', background: 'light-grey', marginRight: '20%' }}>
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            <span>{formatDate(task.startDate)}</span>
                            <span>{formatDate(task.dueDate)}</span>
                            <span>{task.priority}</span>
                        </div>
                    ))
                ) : (
                    <div className='taskDisplay'></div>
                 )   
                }
            </div>
        </div>
    );
};

export default Homepage;
