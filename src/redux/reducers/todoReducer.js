import {
  getTodosFromLocalStorage,
  saveTodosToLocalStorage,
} from '../../utils/storage';

const initialState = getTodosFromLocalStorage();

const updateLocalStorage = (todos) => {
  saveTodosToLocalStorage(todos);
  return todos;
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return updateLocalStorage([...state, action.payload]);

    case 'REMOVE_TODO':
      return updateLocalStorage(
        state.filter((todo) => todo.id !== action.payload.id)
      );

    case 'TOGGLE_TODO':
      return updateLocalStorage(
        state.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      );

    default:
      return state;
  }
};

export default todoReducer;
