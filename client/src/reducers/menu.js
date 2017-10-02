import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function menuReducuer(state = initialState.menuOpen, action) {
    switch(action.type) {
        case types.TOGGLE_MENU:
            return !state;
        default:
            return state;
    }
}