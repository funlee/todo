/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2019-03-11 17:52:49
 * @Description: todo 组件入口 
 */
import React,{ Component } from 'react';
import { observer } from 'mobx-react';

import '../../assets/todo.scss';

import TodoLists from '../../components/todoLists';
import TodoCount from '../../components/todoCount';
import TodoPanel from '../../components/todoPanel';

@observer
class Todo extends Component {
  render() {
    const { store } = this.props;
    return(
      <div className="todo">
        <h1 className="todo-title">Todo List</h1>
        <TodoLists store={store} />
        <TodoCount store={store} />
        <TodoPanel store={store} />
      </div>
    )
  }
}

export default Todo;