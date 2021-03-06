import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

import Home from './Pages/Home';
import Admin_Signup from './Pages/Admin_Signup';
import User_Signup from './Pages/User_Signup';
import Login from './Pages/Login';
import Admin_dashboard from './Pages/Admin/Admin_dashboard';
import Admin_list from './Pages/Admin/Admin_list';
import Admin_user_list from './Pages/Admin/Admin_user_list';
import Logout from './Pages/Logout';
import Update_user from './Pages/Admin/Update_user';
import Update_admin from './Pages/Admin/Update_admin';
import User_dashboard from './Pages/User/User_dashboard';
import Profile from './Pages/User/Profile';


ReactDOM.render(
  <React.StrictMode>
     <Router>
    
    <Switch>

    <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/Admin_signup">
          <Admin_Signup/>
        </Route>
        <Route exact path="/User_signup">
          <User_Signup/>
        </Route>
        <Route exact path="/Login">
          <Login/>
        </Route>
        <Route exact path="/Admin_Dashboard">
          <Admin_dashboard/>
        </Route>
        <Route exact path="/Admin_list">
          <Admin_list/>
        </Route>
        <Route exact path="/Admin_user_list">
          <Admin_user_list/>
        </Route>
        <Route exact path="/logout">
          <Logout/>
        </Route>
        <Route exact path="/Update_user/:id">
              <Update_user/>
            </Route>
            <Route exact path="/Update_admin/:id">
              <Update_admin/>
            </Route>
            <Route exact path="/User_dashboard">
          <User_dashboard/>
        </Route>
        <Route exact path="/Profile">
          <Profile/>
        </Route>
    </Switch>
</Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
