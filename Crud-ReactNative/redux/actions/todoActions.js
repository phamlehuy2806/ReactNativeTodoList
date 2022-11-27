import { CREATE_TODO, RETRIEVE_TODOS, UPDATE_TODO, DELETE_TODO } from "../type";

import DataService from "../dataService";

export const createTodo = (createdAt, heading) => async (dispatch) => {
  try {
    const res = await DataService.create({ heading, createdAt });

    dispatch({
      type: CREATE_TODO,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveTodos = () => async (dispatch) => {
  try {
    const res = await DataService.getAll();

    dispatch({
      type: RETRIEVE_TODOS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateTodo = (id, data) => async (dispatch) => {
  try {
    const res = await DataService.update(id, data);

    dispatch({
      type: UPDATE_TODO,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await DataService.delete(id);

    dispatch({
      type: DELETE_TODO,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};
