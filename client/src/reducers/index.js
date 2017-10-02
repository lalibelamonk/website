import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import compositions from './compositions';
import menuOpen from './menu';

const rootReducer = combineReducers({
    routerReducer,
    compositions,
    menuOpen
});

export default rootReducer;