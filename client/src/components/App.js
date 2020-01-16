import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Courses from './Courses';
import '../css/global.css';

export default function App () {
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" render={Courses} />
        </Switch>
      </BrowserRouter>
    );
}
