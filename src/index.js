import "./styles.css";
import { createProjectCard, createTodoCard } from "./card";

const createProjectButton = document.querySelector("nav > button");
createProjectButton.addEventListener('click', function() {
    createProjectCard();
});

const createTodoButton = document.querySelector("#todo-window > button");
createTodoButton.addEventListener('click', function() {
    createTodoCard();
});