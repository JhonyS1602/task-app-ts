interface Task {
  id: number;
  text: string;
}

const form = document.getElementById("task-form") as HTMLFormElement;
const input = document.getElementById("task-input") as HTMLInputElement;
const list = document.getElementById("task-list") as HTMLUListElement;

let tasks: Task[] = [];
let currentId = 1;

form.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  const newTask: Task = {
    id: currentId++,
    text,
  };

  tasks.push(newTask);
  renderTasks();
  input.value = "";
});

function renderTasks(): void {
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
