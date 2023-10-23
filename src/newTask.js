function showInput(){

    const textValues = ["Title", "Description", "Start Date", "Due Date", "Priority"];
    const inputProperties = ["title", "description", "startDate", "dueDate", "priority"];

    // Style content
    const content = document.getElementById("content");
    content.style.cssText = "display: flex; justify-content: center; align-items: center;";

    // Checking if it already exists
    if(document.getElementById("inputContainer")){
        return;
    }

    // Create an "sticker" for inputs of a new task
    const inputContainer = document.createElement("div");
    inputContainer.setAttribute("id", "inputContainer");
    inputContainer.style.cssText = "border 1px grey; background-color: #f7f7f7; border-radius: 25px; padding: 2rem; box-shadow: 10px 15px 20px #8E8E8E; font-size: 2em;"
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
            textarea.style.cssText = "height: 100px; width: 500px; font-size: 20px;";
            form.appendChild(label);
            form.appendChild(textarea);
        } else {
            const input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("required", "required");
            input.setAttribute("name", inputProperties[i]);
            input.style.cssText = "height: 30px; width: 500px; font-size: 20px;";
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

    form.appendChild(addButton);

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

export {showInput};

const todaysTasks = [];

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

        todaysTasks.push(newTask)

    }
    showTodaysTasks(todaysTasks);
}

function showTodaysTasks(todaysTasks){
    const content = document.getElementById("content");
    content.innerHTML = "";
    
    const todaysTasksDisplay = document.createElement("div");
    todaysTasksDisplay.setAttribute("id", "todaysTasksDisplay");

    todaysTasks.forEach((value) => {

        const task = document.createElement("div");
        task.setAttribute("id", "task");
        task.style.cssText = "border: 1px solid black; background: light-grey;"
        content.appendChild(task);

        const title = document.createElement("h4");
        title.textContent = value.title;
        task.appendChild(title);
        const description = value.description;
        const startDate = value.startDate;
        const dueDate = value.dueDate;
        const priority = value.priority;
    });

}