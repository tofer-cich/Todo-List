export class Project {

    constructor(title, dueDate) {
        this.title = title;
        this.dueDate = dueDate;
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(todo) {
        const index = this.todos.findIndex((element) => element.title === todo.title);

        return index > -1 ? this.todos.splice(index, 1) : this.todos;
    }
}

export class Todo {

    constructor(title, dueDate, description, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
        this.priority = priority;
        this.complete = 0;
    }
}