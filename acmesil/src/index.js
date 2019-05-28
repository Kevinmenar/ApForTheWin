import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
//import App from './App';
import App from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase';
//import Account from './components/Account';
//import Admin from './components/Admin';
//import Firebase from './components/Firebase';
//import Home from './components/Home';
//import Landing from './components/Landing';
//import Navigation from './components/Navigation';
//import PasswordChange from './components/PasswordChange';
//import PasswordForget from './components/PasswordForget';
//import Session from './components/Session';
//import SingIn from './components/SingIn';
//import SingOut from './components/SingOut';
//import SignUp from './components/SignUp';
ReactDOM.render(<FirebaseContext.Provider value={new Firebase()}>
  <App /></FirebaseContext.Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
