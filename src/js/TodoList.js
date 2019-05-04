import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';


@observer
export class TodoList extends React.Component {

  filter = (event) => {
    this.props.store.filter = event.target.value;
  }

  createTodos = (e) => {
    const { value } = e.target;
    if (e.which === 13) {
      this.props.store.createTodos(value);
      e.target.value = '';
    }
  }

  toggleComplete(todo) {
    todo.completed = !todo.completed;
  }

  render() {
    const { filter, clearCompletedTodos, filterTodos } = this.props.store;
    const todoList = filterTodos.map(todo => (
      <li key={todo.id}>
        <input
          type="checkbox"
          checked={todo.completed}
          value={todo.completed}
          onChange={this.toggleComplete.bind(this, todo)}
        />
        {todo.value}
      </li>
    ));
    return (
      <div>
        <h1>ToDo</h1>
        <input type="text" placeholder="filter todo" onChange={this.filter} />&nbsp;
        <input type="text" placeholder="create a todo" onKeyPress={this.createTodos} />
        {filter}
        <ul>{todoList}</ul>
        <button
          type="button"
          onClick={clearCompletedTodos}
        >
          Clear Completed Todos
        </button>
      </div>
    )
  }
}

TodoList.propTypes = {
  filter: PropTypes.func,
}