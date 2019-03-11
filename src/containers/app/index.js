/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2019-03-11 17:39:40
 * @Description: 组件入口 
 */
import React from 'react';
import Todo from '../todo'
import Store from '../../store';

const store = new Store();

const App = () => {
  return <Todo store={store} />
}

export default App;