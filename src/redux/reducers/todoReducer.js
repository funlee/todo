import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/todoAction';
/**
 * 初始化 state
 */

const initState = {
  tasks: [
    { 'id': '001', 'task': '打开 github 官网', 'complete': true },
    { 'id': '002', 'task': '搜索关键词 funlee', 'complete': false },
    { 'id': '003', 'task': 'And Then Follow him', 'complete': false }
  ]
}
export default function reducer(state = initState, action) {
  switch(action.type) {
    case ADD_TODO :
      const newTodo = { 'id': new Date().valueOf(), 'task': action.operate.value, 'complete': false }
      state.tasks.push(newTodo)
      return {
        ...state
      }
    case TOGGLE_TODO:
      return {
        ...state,
        tasks: state.tasks.map(item => {
          if (item.id === action.operate.id) {
            item.complete = !item.complete
          }
          return item
        })
      }
    case DELETE_TODO:
      return {
        tasks: state.tasks.filter((item,index) => {
          if (item.id == action.operate.id) {
            state.tasks.splice(index,1)
          }
          return item.id != action.operate.id
        })
      }
    default:
      return state
  }
}
