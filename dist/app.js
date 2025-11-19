"use strict";
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");
let tasks = [];
let currentId = 1;
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text)
        return;
    const newTask = {
        id: currentId++,
        text,
    };
    tasks.push(newTask);
    renderTasks();
    input.value = "";
});
function renderTasks() {
    list.innerHTML = "";
    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.className = "task-item";
        const span = document.createElement("span");
        span.textContent = task.text;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            tasks = tasks.filter((t) => t.id !== task.id);
            renderTasks();
        });
        li.appendChild(span);
        li.appendChild(deleteButton);
        list.appendChild(li);
    });
}
