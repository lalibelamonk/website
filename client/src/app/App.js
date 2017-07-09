import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Route, Redirect } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import configureStore from '../store/store';
import {routes} from '../routes/routes';
import { history } from '../history/history';

import './App.css';


const store = configureStore(history);

const PrivateRoute =({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
            <Component {...props}/>
        )
    )}/>
)


const App = (props) => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div className="App">
                <div className="main-container">
                    {routes.map((route, idx) => {
                        if(route.private) {
                            return <PrivateRoute key={idx} {...route}/>
                        }
                        return <Route key={idx} {...route}/>
                    })}
                </div>
            </div>
        </ConnectedRouter>
    </Provider>
);

export default App;