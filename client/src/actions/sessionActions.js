import * as types from './actionTypes';
import sessionApi from '../api/sessionApi';
import { setCurrentSession } from '../util/session';

function logInSuccess() {
    return {type: types.UPDATE_SESSION, next: true};
}

function logOutSuccess() {
    return {type: types.UPDATE_SESSION, next: false};
}

export function logIn(credentials) {
    return function(dispatch) {
        return sessionApi.logIn(credentials).then(response => {
            setCurrentSession(response);
            dispatch(logInSuccess());
        }).catch(error => {
            throw(error);
        });
    };
}

export function logOut() {
    return function(dispatch) {
        setCurrentSession(null);
        dispatch(logOutSuccess());
    }
}