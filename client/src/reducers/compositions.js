import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function compositionsReducuer(state = initialState.compositions, action) {
    switch(action.type) {
        case types.GET_COMPOSITIONS_SUCCESS:
            return {...state, ...action.next};
        default:
            return state;
    }
}