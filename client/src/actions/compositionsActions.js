import * as types from './actionTypes';
import compositionsApi from '../api/compositionsApi';

function getCompositionsSuccess(response) {
    return {type: types.GET_COMPOSITIONS, next: [...response.compositions]};
}

function saveCompositionSuccess(response) {
    return {type: types.UPDATE_COMPOSITION, next: {...response}};
}

function deleteCompositionSuccess(data) {
    return {type: types.DELETE_COMPOSITION, next: {...data}};
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

export function saveComposition(data) {
    return function(dispatch) {
        return compositionsApi.updateComposition(data).then(response => {
            dispatch(saveCompositionSuccess(response));
        }).catch(error => {
            throw(error);
        });
    }
}

export function createComposition(data) {
    return function(dispatch) {
        return compositionsApi.createComposition(data).then(response => {
            dispatch(saveCompositionSuccess(response));
        }).catch(error => {
            throw(error);
        });
    }
}

export function deleteComposition(data) {
    return function(dispatch) {
        return compositionsApi.deleteComposition(data).then(response => {
            dispatch(deleteCompositionSuccess(data));
        }).catch(error => {
            throw(error);
        });
    }
}