import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function compositionsReducuer(state = initialState.compositions, action) {
    switch(action.type) {
        case types.GET_COMPOSITIONS:
            return [...action.next];
        case types.DELETE_COMPOSITION:
            return state.filter((el) => { return el.id !== action.next.id })
        default:
            return state;
    }
}