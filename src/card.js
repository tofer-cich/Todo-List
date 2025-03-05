import { Project, Todo } from "./app";

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

    projWindow.appendChild(card);

    return proj;
}

export function createTodoCard() {
    const todo = new Todo(prompt("Title?"), prompt("Due Date?"), prompt("Description?"), prompt("Priority?"));
    //DOM create card
    return todo;
}