// src/Homepage.jsx
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { allTasks } from './newTask'; // Ensure this exports the task list

moment.locale("en-gb");

const Homepage = () => {
    const [tasks, setTasks] = useState([]);
    const [dates, setDates] = useState([]);

    useEffect(() => {
        showAllTasks(allTasks);
        getDates(allTasks);
    }, []);

    const showAllTasks = (allTasks) => {
        getDates(allTasks);
        setTasks(allTasks);
    };

    const getDates = (allTasks) => {
        const formattedDates = allTasks.map(value => formatDate(value.startDate));
        setDates(formattedDates);
    };

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
            <div id="taskDisplay" style={{ display: 'flex', flexDirection: 'column', gap: '5%' }}>
                {tasks.map((task, index) => (
                    <div key={index} id="task" style={{ border: '1px solid black', background: 'light-grey', marginRight: '20%' }}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <span>{formatDate(task.startDate)}</span>
                        <span>{formatDate(task.dueDate)}</span>
                        <span>{task.priority}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Homepage;
