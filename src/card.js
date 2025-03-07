import { Project, Todo, User } from "./app";

let currentProj = undefined;

export function createProjectCard() {
    const proj = new Project(prompt("title?"), prompt("Due Date?"));
    //DOM create card
    const projWindow = document.querySelector("#project-window");

    const card = document.createElement("div");
    card.classList.add("card");

    const cardTitle = document.createElement("h3");
    cardTitle.textContent = proj.title;

    const cardDueDate = document.createElement("p");
    cardDueDate.textContent = `Due: ${proj.dueDate}`;

    card.appendChild(cardTitle);
    card.appendChild(cardDueDate);

    const openButton = document.createElement("button");
    openButton.textContent = "Open";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    card.appendChild(openButton);
    card.appendChild(deleteButton);

    deleteButton.addEventListener('click', function() {
        clearTodoWindow();
        projWindow.removeChild(card);
    });

    openButton.addEventListener('click', function() {
        updateTodoWindow(proj);
    });

    projWindow.appendChild(card);

    return proj;
}

export function createTodoCard() {
    const todo = new Todo(prompt("Title?"), prompt("Due Date?"), prompt("Description?"), prompt("Priority?"));
    //DOM create card
    currentProj.addTodo(todo);
    updateTodoWindow(currentProj);

    return todo;
}

export function updateTodoWindow(proj) {
    currentProj = proj;
    const todoWindow = document.querySelector("#todo-window");
    const todoContainer = document.querySelector("#todo-container");
    const todoList = document.createElement("ul");

    document.getElementById("todo-project-title").textContent = proj.title;

    while (todoContainer.firstChild) {
        todoContainer.removeChild(todoContainer.lastChild);
    }

    for (const item of proj.getTodos()) {
        const todoTitle = document.createElement("li");
        todoTitle.textContent = item.getTitle();

        todoList.appendChild(todoTitle);
    }

    todoContainer.appendChild(todoList);

    return true;
}

export function clearTodoWindow() {
    document.getElementById("todo-project-title").textContent = "";

    const todoContainer = document.getElementById("todo-container");

    while (todoContainer.firstChild) {
        todoContainer.removeChild(todoContainer.lastChild);
    }
}