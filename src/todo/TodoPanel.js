/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2018-01-19 00:02:08
 * @Last Modified time: 2018-01-19 00:02:08
 * @Description: TodoPanel component
 */
import React, { Component } from 'react';

class TodoPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value:''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }
  handleClick() {
    if (this.state.value.trim() === '') {
      alert('请输入Task！')
      return
    }
    this.props.addTask(this.state.value.trim())
    this.setState({
      value: ''
    })
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }
  handleKeyPress(event){
    if(event.keyCode === 13) {
      this.handleClick()
    }
  }
  render() {
    return (
      <div className="panel">
        <p>
          <span>Task</span>
          <input type="text" placeholder="你想做点什么？" value={this.state.value} onChange={this.handleChange} onKeyUp={this.handleKeyPress} />
        </p>
        <p>
          <button onClick={this.handleClick}>Save Task</button>
        </p>
      </div>
    )
  }
}

export default TodoPanel