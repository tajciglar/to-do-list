import './style.css';

import { showInput } from './newTask';

document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");


});

const newTask = document.getElementById("newTask");

newTask.addEventListener("click", showInput);