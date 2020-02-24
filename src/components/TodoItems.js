import React, { Component } from "react";
import TodoItem from "./TodoItem";
import TodoStore from "../stores/TodoStore";
import { observer } from "mobx-react";
import store from "../stores/TodoStore";
import TodoModel from "../stores/TodoModel";

@observer
class TodoItems extends Component {
  filter_completed = () => {
    return TodoStore.todos.filter(function(todo) {
      return !todo.completed;
    });
  };

  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {TodoStore.todos.map(todo => {
            if(TodoStore.filter_item === 1)
              return <TodoItem key={todo.id} todo={todo} />;
            if(TodoStore.filter_item === 2 && todo.completed === false)
              return <TodoItem key={todo.id} todo={todo} />;
            if(TodoStore.filter_item === 3 && todo.completed === true)
              return <TodoItem key={todo.id} todo={todo} />;
          })}
        </ul>
        <div className="footer">
          <div className="todo-count">{this.filter_completed().length} items left</div>
          <ul className="filters">
            <li>
              <a className={TodoStore.filter_item === 1 ? "selected" : ""} onClick={() => {TodoStore.filter_function(1)}}>All</a>
            </li>
            <li>
              <a className={TodoStore.filter_item === 2 ? "selected" : ""} onClick={() => {TodoStore.filter_function(2)}}>active</a>
            </li>
            <li>
              <a className={TodoStore.filter_item === 3 ? "selected" : ""} onClick={() => {TodoStore.filter_function(3)}}>completed</a>
            </li>
          </ul>
          <button className="clear-completed" onClick={() => {TodoStore.clear()}}> clear completed</button>
        </div>
      </section>
    );
  }
}

export default TodoItems;
