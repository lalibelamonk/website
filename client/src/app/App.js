import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import configureStore from '../store/store';
import {routes} from '../routes/routes';
import { history } from '../history/history';
import { ConnectedRouter } from 'react-router-redux';
import Header from '../components/header/header';

import './App.css';


const store = configureStore(history);

const PrivateRoute =({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        <Component {...props} />
    )}/>
)


const App = (props) => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div className="App">
                <Header />
                <div className="main-container">
                    {routes.map((route, idx) => {
                        if(route.private) {
                            return <PrivateRoute key={idx} {...route}/>
                        }
                        return <Route exact key={idx} {...route}/>
                    })}
                </div>
            </div>
        </ConnectedRouter>
    </Provider>
);

export default App;