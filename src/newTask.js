import { showAllTasks } from "./index";
import moment from 'moment';
moment.locale(); 
const allTasks = [];

function showInput(){

    const textValues = ["Title", "Description", "Start Date", "Due Date", "Priority"];
    const inputProperties = ["title", "description", "startDate", "dueDate", "priority"];

    // Style content
    const content = document.getElementById("content");
    content.style.cssText = "display: grid; grid-template-rows: minmax(100px, 100PX) minmax(500px, auto); padding-left: 20%;";

    // Checking if it already exists
    if(document.getElementById("inputContainer")){
        return;
    }

    // Create an "sticker" for inputs of a new task
    const inputContainer = document.createElement("div");
    inputContainer.setAttribute("id", "inputContainer");
    inputContainer.style.cssText = "width: 50%; min-width: 50%; border: 1px grey; background-color: #f7f7f7; border-radius: 25px; padding: 2rem; box-shadow: 10px 15px 20px #8E8E8E; font-size: 2em; position: fixed; z-index: 1;";
    content.appendChild(inputContainer);

    const form = document.createElement("form");
    form.setAttribute("id", "newTaskForm");
    inputContainer.appendChild(form)
    form.style.cssText = "display: flex; flex-direction: column; gap: 5px;";

    // Create input elements and labels
    for (let i = 0; i < inputProperties.length; i++) {
        const label = document.createElement("label");
        label.textContent = textValues[i];
    
        if (inputProperties[i] === "description") {
            const textarea = document.createElement("textarea");
            textarea.setAttribute("name", inputProperties[i]);
            textarea.setAttribute("required", "required");
            textarea.setAttribute("maxlength", "200");
            textarea.style.cssText = "height: 100px; width: 100%; font-size: 20px; resize: none;";
            form.appendChild(label);
            form.appendChild(textarea);
        } else if (inputProperties[i] === "startDate" || inputProperties[i] === "dueDate") {
            const input = document.createElement("input");
            input.setAttribute("type", "date");
            
          
            const today = new Date();
            const yyyy = today.getFullYear();
            let mm = today.getMonth() + 1;
            let dd = today.getDate();
        
            if (mm < 10) mm = '0' + mm;
            if (dd < 10) dd = '0' + dd;
    
            const minDate = yyyy + '-' + mm + '-' + dd;
            input.setAttribute("min", minDate);
           
            input.setAttribute("value", "");
            input.setAttribute("placeholder", "dd-mm-yyyy");
            input.setAttribute("name", inputProperties[i]);
            input.style.cssText = "height: 30px; width: 100%; font-size: 20px;";
            form.appendChild(label);
            form.appendChild(input);
        } else if (inputProperties[i] === "priority"){
            const input = document.createElement("input");
            input.setAttribute("type", "number");
            input.setAttribute("max", "5");
            input.setAttribute("min", "1");
            input.setAttribute("name", inputProperties[i]);
            input.style.cssText = "height: 30px; width: 100%; font-size: 20px;";
            form.appendChild(label);
            form.appendChild(input);
        } else {
            const input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("required", "required");
            input.setAttribute("name", inputProperties[i]);
            input.style.cssText = "height: 30px; width: 100%; font-size: 20px;";
            form.appendChild(label);
            form.appendChild(input);
        }
    }

    // Add a button that will submit a form
    const addButton = document.createElement("button");
    addButton.setAttribute("type", "submit");
    addButton.setAttribute("id", "addEventButton");
    addButton.textContent = "ADD A TASK";
    addButton.style.cssText = "font-size: 20px; border: 1px solid #8B4513; border-radius: 15px; color: #f7f7f7; background-color: #8B4513;"
    const cancelButton = document.createElement("button");
    cancelButton.setAttribute("type","button");
    cancelButton.setAttribute("id", "cancelButton");
    cancelButton.textContent = "CANCEL";
    cancelButton.style.cssText = "font-size: 20px; border: 1px solid #8B4513; width: 30%";
    cancelButton.addEventListener("click", () =>{
        // content.remove(inputContainer);
        showAllTasks(allTasks);
    })
    form.appendChild(addButton);
    form.appendChild(cancelButton);
    
    // Get values from a form using FormData
    form.addEventListener("submit", function (event){
        event.preventDefault();
        const formData = new FormData(form);
        const taskData = {};

        formData.forEach((value, key) => {
            taskData[key] = value;
        });
        addNewTask(taskData);

        // Reset a form
        form.reset();
    });
} 

function addNewTask(taskData) {
    class NewTask {
        constructor(title, description, startDate, dueDate, priority) {
            this.title = title;
            this.description = description;
            this.startDate = startDate;
            this.dueDate = dueDate;
            this.priority = priority;
        }
    }

    // Check if the taskData object is not empty
    if (Object.keys(taskData).length > 0) {
        const newTask = new NewTask(
            taskData.title,
            taskData.description,
            taskData.startDate,
            taskData.dueDate,
            taskData.priority
        );

        allTasks.push(newTask)
        showAllTasks(allTasks);
    }
   
}
export { allTasks, addNewTask, showInput };