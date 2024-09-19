class Project {

    constructor(title) {
        this.title = title;
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

class Todo {

    constructor(title, dueDate, description, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
        this.priority = priority;
    }
}