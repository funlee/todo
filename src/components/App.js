import React,{ Component } from 'react';
import TodoLists from './TodoLists';

export default class App extends Component {
  render() {
    return(
      <div className="todo">
        <h1 className="todo-title">React-Redux Todo</h1>
        <TodoLists />
      </div>
    )
  }
}
