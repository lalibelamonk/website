import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function sessionReducuer(state = initialState.session, action) {
    switch(action.type) {
        case types.LOG_IN:
            return action.next;
        default:
            return state;
    }
}