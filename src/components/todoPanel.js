/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2019-03-11 15:45:57
 * @Description: TodoPanel component 
 */
import React,{ Component } from 'react';
import { observer } from 'mobx-react';
 
@observer
class TodoPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
  handleChange = e => {
    const value = e.target.value;
    
    this.setState({
      value
    })
  }
  handleKeyUp = e => {
    if(e.keyCode === 13) {
      this.handleClick()
    }
  }
  handleClick = () => {
    const { value } = this.state;

    if (value === '') {
      alert('请输入 Task');
      return
    }

    const { store } = this.props;
    store.addTask(value);

    this.setState({
      value: ''
    })
  }
  render() {
    const { value } = this.state;
    return(
      <div className="panel">
        <p>
          <span>Task</span>
          <input 
            type="text"
            placeholder="你想做点什么？"
            value={value}
            onChange={this.handleChange}
            onKeyUp={this.handleKeyUp}
          />
        </p>
        <p>
          <button onClick={this.handleClick}>Save Task</button>
        </p>
      </div>
    )
  }
}

export default TodoPanel;
