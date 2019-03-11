/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2019-03-11 17:45:17
 * @Description: todoCount component 
 */
import React,{ Component } from 'react';
import { observer } from 'mobx-react';

@observer
class TodoCount extends Component {
  render() {
    const { store } = this.props;
    return(
      <div className="item-acount">
        <span className="did">{store.completeLength}</span>已完成 / <span className="amount">{store.amount}</span>总数
      </div>
    )
  }
}

export default TodoCount;
