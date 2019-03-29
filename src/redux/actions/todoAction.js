export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function addTodo(value) {
  return {
    type: ADD_TODO,
    operate: {
      value
    }
  }
}
export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    operate: {
      id
    }
  }
}
export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    operate: {
      id
    }
  }
}
