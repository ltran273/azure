import * as types from './ActionTypes';
import {
    adalApiFetch
} from '../../adalConfig';
import axios from 'axios';

export const API_URL = "http://localhost:8080/api/";

export const getTodoList = () => {
    return (dispatch) => {
        adalApiFetch(axios, `${API_URL}todolist`)
            .then((response) => {
                dispatch({
                    type: types.GET_TODO_LIST,
                    response
                });
            })
            .catch((error) => {
                console.log("error", error);
            });
    };
};

export const getTodoDetail = (id) => {
    return (dispatch) => {
        adalApiFetch(axios, `${API_URL}todolist/${id}`)
            .then((response) => {
                dispatch({
                    type: types.GET_TODO_DETAIL,
                    response
                });
            })
            .catch((error) => {
                console.log("error", error);
            });
    };
};

export const addTodoList = (data) => {
    return (dispatch) => {
        adalApiFetch(axios, `${API_URL}todolist`, {
                method: 'POST',
                data: data,
                withCredentials: true
            })
            .then((response) => {
                dispatch({
                    type: types.ADD_TODO_LIST,
                    response
                });
                dispatch({
                    type: types.RESPONSE_MESSAGE,
                    response,
                });
            })
            .catch((error) => {
                console.log("error", error);
                dispatch({
                    type: types.ERROR_MESSAGE,
                    error,
                });
            });
    };
};

export const editTodoList = (data) => {
    return (dispatch) => {
        adalApiFetch(axios, `${API_URL}todolist`, {
                method: 'PUT',
                data: data
            })
            .then((response) => {
                dispatch({
                    type: types.EDIT_TODO_LIST,
                    response,
                    data: data,
                });
                dispatch({
                    type: types.RESPONSE_MESSAGE,
                    response,
                });
            })
            .catch((error) => {
                console.log("error", error);
                dispatch({
                    type: types.ERROR_MESSAGE,
                    error,
                });
            });
    };
};

export const deleteTodoList = (id) => {
    return (dispatch) => {
        adalApiFetch(axios, `${API_URL}todolist/${id}`, {
                method: 'DELETE'
            })
            .then((response) => {
                dispatch({
                    type: types.DELETE_TODO_LIST,
                    response,
                    ID: id,
                });
                dispatch({
                    type: types.RESPONSE_MESSAGE,
                    response,
                });
            })
            .catch((error) => {
                console.log("error", error);
                dispatch({
                    type: types.ERROR_MESSAGE,
                    error,
                });
            });
    };
};