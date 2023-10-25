import './style.css';
import moment from 'moment';
import { showInput } from './newTask';
import { allTasks } from './newTask';
import { showTodaysTasks } from './todaysTasks';
moment.locale("en-gb");

let dates = [];

document.addEventListener("DOMContentLoaded", () => {
    showAllTasks(allTasks);
    getDates(allTasks);

    const allTaskSideBar = document.getElementById("all");
    allTaskSideBar.addEventListener("click", () => showAllTasks(allTasks));

    const todayTaskSideBar = document.getElementById("today");
    todayTaskSideBar.addEventListener("click", () => showTodaysTasks(allTasks)); 

    const newTask = document.getElementById("newTask");
    newTask.addEventListener("click", showInput);
});
   
function showAllTasks(allTasks) {
    getDates(allTasks);
    const content = document.getElementById("content");
    content.innerHTML = "";
    content.style.cssText = "display: grid; grid-template-rows: minmax(100px, 100PX) minmax(500px, auto); padding-left: 20%;";

    const dateHolder = document.createElement("div");
    let date = moment();
    let todaysDate = date.format(`D/MM/YYYY`);
        
    dateHolder.textContent = `TODAY ` + todaysDate;
    dateHolder.setAttribute("id", "dateHolder");
    content.appendChild(dateHolder);
        
    const taskDisplay = document.createElement("div");
    taskDisplay.setAttribute("id", "taskDisplay");
    taskDisplay.style.cssText = "display: flex; flex-direction: column; gap: 5%;"
    content.appendChild(taskDisplay);

     allTasks.forEach((value) => {

        const task = document.createElement("div");
        task.setAttribute("id", "task");
        task.style.cssText = "border: 1px solid black; background: light-grey; margin-right: 20%"
        taskDisplay.appendChild(task);
        
        const title = document.createElement("h3");
        title.textContent = value.title;
        const description = document.createElement("p");
        description.textContent = value.description;
        const startDate = document.createElement("span");
        startDate.textContent = formatDate(value.startDate);
        const dueDate = document.createElement("span");
        dueDate.textContent = formatDate(value.dueDate);
        const priority = document.createElement("span");
        priority.textContent = value.priority;
        task.appendChild(title);
        task.appendChild(description);
        task.appendChild(startDate);
        task.appendChild(dueDate);
        task.appendChild(priority);
    });
}

function getDates (allTasks) {
    allTasks.forEach((value) => {
        dates = formatDate(value.startDate);
        console.log(dates);
    });
}

function formatDate(inputDate) {
    const dateParts = inputDate.split('-');
    if (dateParts.length === 3) {
        const year = dateParts[0].slice(); 
        const month = dateParts[1];
        const day = dateParts[2];
        return `${day}-${month}-${year}`;
    }
}



export {showAllTasks};
    
   




