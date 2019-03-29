import todoReducer from './reducers/todoReducer';

export default function combineReducers(state = {}, action) {
  return {
    todoList: todoReducer(state.todo, action)
  }
}