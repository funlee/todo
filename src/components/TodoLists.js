import React, { Component } from 'react';
import { toggleTodo, deleteTodo, addTodo } from '../redux/actions/todoAction';

import { connect } from 'react-redux';

class TodoLists extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
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
    this.props.addTodo(this.state.value.trim())
    this.setState({
      value: ''
    })
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleClick()
    }
  }
  render() {
    const { tasks } = this.props.lists
    const listDOM = tasks.map((item,index) => (
      <li className={item.complete ? 'active' : ''} key={`li-${index}`}>
        <span className="item-checked" onClick={() => this.props.toggleTodo(item.id)}></span>
        <span className="item-detail">{item.task}</span>
        <span className="item-delete" onClick={() => this.props.deleteTodo(item.id)}>删除</span>
      </li>
    ))
    const totalCompleteCount = this.props.lists.tasks.filter(item => {
      return item.complete === true
    }).length
    return (
      <div>
        <ul className="todo-lists">
          {listDOM}
        </ul>
        <div className="item-acount">
          <span className="did">{totalCompleteCount}</span>已完成 / <span className="amount">{this.props.lists.tasks.length}</span>总数
        </div>
        <div className="panel">
          <p>
            <span>Task</span>
            <input type="text" placeholder="你想做点什么？" value={this.state.value} onChange={this.handleChange} onKeyUp={this.handleKeyPress} />
          </p>
          <p>
            <button onClick={this.handleClick}>Save Task</button>
          </p>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    lists: state.todoList
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: id => {
      dispatch(toggleTodo(id))
    },
    deleteTodo: id => {
      dispatch(deleteTodo(id))
    },
    addTodo: value => {
      dispatch(addTodo(value))
    }
  }
};
// 容器组件就是使用 store.subscribe() 从 Redux state 树中读取部分数据，并通过 props 来把这些数据提供给要渲染的组件。
// 你可以手工来开发容器组件，但建议使用 React Redux 库的 connect() 方法来生成，
// 这个方法做了性能优化来避免很多不必要的重复渲染。

// connect接收两个参数，
// 一个mapStateToProps, 就是把redux的state，转为组件的Props，
// 还有一个参数是mapDispatchToprops,就是把发射actions的方法，转为Props属性函数。

export default connect(mapStateToProps, mapDispatchToProps)(TodoLists);
