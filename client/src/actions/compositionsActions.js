import * as types from './actionTypes';
import compositionsApi from '../api/compositionsApi';

export function getCompositionsSuccess(response) {
    return {type: types.GET_COMPOSITIONS, next: [...response.compositions]};
}

export function getCompositions() {
    return function(dispatch) {
        return compositionsApi.getCompositions().then(response => {
            dispatch(getCompositionsSuccess(response));
        }).catch(error => {
            throw(error);
        });
    };
}