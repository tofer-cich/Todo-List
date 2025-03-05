import "./styles.css";
import { createProjectCard } from "./card";

const createProjectButton = document.querySelector("nav > button");
createProjectButton.addEventListener('click', function() {
    createProjectCard();
});