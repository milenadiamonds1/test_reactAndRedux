export const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: {
    id: new Date().getTime(),
    text,
    completed: false,
  },
});

export const removeTodo = (id) => ({
  type: 'REMOVE_TODO',
  payload: { id },
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  payload: { id },
});

