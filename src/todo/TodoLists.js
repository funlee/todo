/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2018-01-18 22:07:29
 * @Last Modified time: 2018-01-18 22:07:29
 * @Description: TodoLists component 
 */
import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoLists extends Component {
  render() {
    const listItems = this.props.data.map(item => {
      return (
        <TodoItem 
        task={item.task} 
        complete={item.complete} 
        key={item.id} 
        toggleComplete={this.props.toggleComplete}
        deleteTask={this.props.deleteTask}
        taskId={item.id}/>
      )
    })
    return (
      <ul className="todo-lists">
        {listItems}
      </ul>
    )
  }
}
export default TodoLists