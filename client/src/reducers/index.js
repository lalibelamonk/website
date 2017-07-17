import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import compositionsReducer from './compositions';

const rootReducer = combineReducers({
    routerReducer,
    compositionsReducer
});

export default rootReducer;