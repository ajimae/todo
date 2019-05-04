import { computed, observable } from 'mobx';
import Todo from './Todo';

class Store {
  @observable todos = [];
  @observable filter = '';

  @computed get filterTodos() {
    let matchFilter = new RegExp(this.filter, "i");
    return this.todos.filter(todo => !this.filter || matchFilter.test(todo.value));
  }

  createTodos(todo) {
    this.todos.push(new Todo(todo));
  }

  clearCompletedTodos = () => {
    const incompletedTodo = this.todos.filter(todo => !todo.completed);
    this.todos.replace(incompletedTodo);
  }
}

let store = new Store();

export default store;
