import React,{ Component } from 'react';
import TodoLists from './TodoLists';

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className="todo">
        <h1 className="todo-title">React-Redux Todo</h1>
        <TodoLists />
      </div>
    )
  }
}
