import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import * as serviceWorker from './serviceWorker';
import Home from './features/home/home';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { Switch, BrowserRouter, Link } from 'react-router-dom';
import store from './configureStore';
import Counter from './features/counter/counter';
import UserList from './features/userList/userList';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Link to="/home">Home</Link>
            <span> | </span>
            <Link to="/counter">Counter</Link>
            <span> | </span>
            <Link to="/userList">User List</Link>

            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/counter" component={Counter} />
                <Route path="/userList" component={UserList} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
