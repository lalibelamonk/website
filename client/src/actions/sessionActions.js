import * as types from './actionTypes';
import sessionApi from '../api/sessionApi';
import { setCurrentSession } from '../util/session';

export function logIn(credentials) {
    return function(dispatch) {
        return sessionApi.logIn(credentials).then(response => {
            setCurrentSession(response);
        }).catch(error => {
            throw(error);
        });
    };
}