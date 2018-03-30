import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import compositions from './compositions';
import menuOpen from './menu';
import loggedIn from './session';

const rootReducer = combineReducers({
    routerReducer,
    compositions,
    menuOpen,
    loggedIn
});

export default rootReducer;