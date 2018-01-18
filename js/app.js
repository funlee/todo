/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2018-01-19 00:36:17
 * @Last Modified time: 2018-01-19 00:36:17
 * @Description: react-todo 
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/todo.scss'

import TodoLists from './TodoLists'
import TodoCount from './TodoCount'
import TodoPanel from './TodoPanel'

import playTitle from 'play-title'

class App extends Component {
  constructor(props) {
    super(props);
    playTitle()
    this.state = {
      tasks:[
        {'id':'001' ,'task': '打开 github 官网', 'complete': true },
        {'id':'002' ,'task': '搜索关键词 funlee', 'complete': false },
        {'id':'003' ,'task': 'And Then Follow him', 'complete': false }
      ]
    }
    this.handleToggleComplete = this.handleToggleComplete.bind(this)
    this.addTask = this.addTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
  }
  // 切换一项任务的状态
  handleToggleComplete(taskId) {
    const { tasks } = this.state
    for(let i in tasks) {
      if(tasks[i].id === taskId) {
        tasks[i].complete = !tasks[i].complete
        break;
      }
    }
    this.setState({ tasks: tasks})
  }
  // 增加一项任务
  addTask(task) {
    const id = new Date().valueOf()
    const { tasks } = this.state
    tasks.unshift({
      id:id,
      task:task,
      complete:false
    })
    this.setState({tasks:tasks})
  }
  // 删除一条任务
  deleteTask(taskId) {
    const { tasks } = this.state
    const data = tasks.filter(item => {
      return item.id !== taskId
    })
    this.setState({ tasks: data })
  }
  render() {
    const totalCount = this.state.tasks.length
    const totalCompleteCount = this.state.tasks.filter(item=> {
      return item.complete === true
    }).length
    return (
      <div className="todo">
        <h1 className="todo-title">React Todo</h1>
        <TodoLists data={this.state.tasks} toggleComplete={this.handleToggleComplete} deleteTask={this.deleteTask}/>
        <TodoCount totalCount={totalCount} totalCompleteCount={totalCompleteCount}/>
        <TodoPanel addTask={this.addTask}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))