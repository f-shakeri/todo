import { action, observable } from "mobx"
import TodoModel from "./TodoModel" 


class TodoStore {
    @observable todos = []
    @observable filter_item = 1
    lastID = 0 

    @action
    addTodo (title) {
        this.todos.push(new TodoModel(this , title , false , this.lastID ++))
    }

    @action
    removeTodo(todoId){
        var filteredTodos = this.todos.filter(todo => todo.id !== todoId);
        this.todos.replace(filteredTodos);
    }

    @action
    filter_function(filter){
        this.filter_item = filter;
    }

    @action
    clear(){
        var clear_items = this.todos.filter(todo => todo.completed != true);
        this.todos = clear_items;
    }
}

const store = new TodoStore()
export default store