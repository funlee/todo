/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2018-01-18 22:04:01
 * @Last Modified time: 2018-01-18 22:04:01
 * @Description: todo item component
 */
import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.toggleComplete = this.toggleComplete.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
  }
  toggleComplete() {
   this.props.toggleComplete(this.props.taskId)
  }
  deleteTask() {
    this.props.deleteTask(this.props.taskId)
  }
  render() {
    return (
      <li className={this.props.complete ? 'active' : ''}>
        <span className="item-checked" onClick={this.toggleComplete}></span>
        <span className="item-detail">{this.props.task}</span>
        <span className="item-delete" onClick={this.deleteTask}>删除</span>
      </li>
    )
  }
}
export default TodoItem