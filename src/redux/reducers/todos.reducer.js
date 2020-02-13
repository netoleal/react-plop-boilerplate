import { LOAD_TODOS_SUCCESS } from '../../services/thunk/load.todos.thunk';

export const INIT_STATE = {
  loading: false,
  error: null,
  todos: [],
};

export default function todosReducer(state = INIT_STATE, action = {}) {
  switch (action.type) {
    case LOAD_TODOS_SUCCESS:
      return { ...state, todos: action.payload };
    default:
      return { ...state };
  }
}
