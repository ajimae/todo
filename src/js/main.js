import React from 'react';
import ReactDOM from 'react-dom';
import { TodoList } from './TodoList';
import store from './Store';
import '../css/main.css';

ReactDOM.render(<TodoList store={store} />, document.getElementById('app'));
