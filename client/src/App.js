import React from 'react';
import './App.css'
import Home from './scenes/home';
import Login from './scenes/login';
import Doctor from './scenes/doctor';

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
      {...rest}
      render={props =>
        window.localStorage.jwt ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
);

export const routing = (
    <Router>
      <div>
        <Route path="/" exact component={Home} /> 
        <Route path="/doctor/:id" exact component={Doctor} /> 
        {/* <PrivateRoute  path="/calendar" component={calendar} />
        <PrivateRoute  path="/settings" component={settings} /> */}
        <Route  path='/login' component={Login} />
      </div>
    </Router>
  )

 