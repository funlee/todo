import React, { Component } from 'react';

class TodoCount extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="item-acount">
        <span className="did">1</span>已完成 / <span className="amount">2</span>总数
      </div>
    )
  }
}
export default TodoCount
