import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function sessionsReducer(state = initialState.loggedIn, action) {
    switch(action.type) {
        case types.UPDATE_SESSION:
            return action.next;
        default:
            return state;
    }
}