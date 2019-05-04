import { observable } from 'mobx';

export default class Todo {
  @observable id;
  @observable value;
  @observable completed;

  constructor(value) {
    this.id = Date.now();
    this.value = value;
    this.completed = false;
  }
}