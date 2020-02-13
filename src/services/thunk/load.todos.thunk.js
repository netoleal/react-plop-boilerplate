/* INJECT CONSTS */

import { makeActionCreator } from '../../util';
import api from '../api';

export const LOAD_TODOS_REQUEST = 'LOAD_TODOS_REQUEST';
export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';
export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';

export const loadTodosRequest = makeActionCreator(LOAD_TODOS_REQUEST, 'path');
export const loadTodosFailure = makeActionCreator(LOAD_TODOS_FAILURE, 'error');
export const loadTodosSuccess = makeActionCreator(
  LOAD_TODOS_SUCCESS,
  'payload'
);

export function loadTodos() {
  return async dispatch => {
    const path = `/todos`;

    dispatch(loadTodosRequest(path));

    try {
      const response = await api.get(path);
      dispatch(loadTodosSuccess(response.data));
    } catch (error) {
      dispatch(loadTodosFailure(error));
    }
  };
}
