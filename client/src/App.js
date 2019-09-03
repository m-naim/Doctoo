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

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

export const routing = (
    <Router>
      <div>
        <Route path="/" exact component={Home} /> 
        <Route path="/doctor/:id" exact component={Doctor} /> 
        <Route  path='/login' component={Login} />
        <Route component={NoMatch} />
      </div>
    </Router>
  )

 