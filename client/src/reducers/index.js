import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import compositions from './compositions';

const rootReducer = combineReducers({
    routerReducer,
    compositions
});

export default rootReducer;