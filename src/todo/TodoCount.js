/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2018-01-18 23:43:45
 * @Last Modified time: 2018-01-18 23:43:45
 * @Description: todoCount component 
 */
import React, { Component } from 'react';

class TodoCount extends Component {
  render() {
    return (
      <div className="item-acount">
        <span className="did">{this.props.totalCompleteCount}</span>已完成 / <span className="amount">{this.props.totalCount}</span>总数
      </div>
    )
  }
}
export default TodoCount