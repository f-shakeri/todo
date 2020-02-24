import React, {Component} from 'react'
import TodoStore from "../stores/TodoStore"

class TodoEntry extends Component {
  state = {
    value: ""
  };

  handlekeyDown = event => {
    if(event.keyCode !==13){
      return;
    }
    event.preventDefault()
    TodoStore.addTodo(this.state.value)
    this.setState({
      value : ""
    });
  }; 
  render() {
      return (
          <header className="header">
          <h1>todos</h1>
          <input
          value={this.state.value}
          onChange={event => this.setState({value: event.target.value})}
          onKeyDown={ event => this.handlekeyDown(event)}
            type="text"
            className="new-todo"
            placeholder="what needs to be done?"
          />
        </header>
      )
  }
}

export default TodoEntry