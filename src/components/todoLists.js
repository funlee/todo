/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2019-03-11 16:45:25
 * @Description: todoLists component 
 */
import React,{ Component } from 'react';
import { observer } from 'mobx-react';

@observer
class TodoLists extends Component {
  render() {
    const { store } = this.props;
    const { tasks } = store;

    return(
      <ul className="todo-lists">
        {
          tasks.map(item => (
            <li className={item.complete ? 'active' : ''} key={item.id}>
              <span className="item-checked" onClick={() => store.toggleComplete(item.id)}></span>
              <span className="item-detail">{item.task}</span>
              <span className="item-delete" onClick={() => store.deleteTask(item)}>删除</span>
            </li>
          ))
        }
      </ul>
    )
  }
}

export default TodoLists;