import * as types from './actionTypes';
import sessionApi from '../api/sessionApi';

export function logInSuccess(response) {
    console.log(response);
    return {type: types.LOG_IN, next: response};
}

export function logIn(credentials) {
    return function(dispatch) {
        return sessionApi.logIn(credentials).then(response => {
            dispatch(logInSuccess(response));
        }).catch(error => {
            throw(error);
        });
    };
}