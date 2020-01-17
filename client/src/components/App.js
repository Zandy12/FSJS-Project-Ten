import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Courses from './Courses';
import CourseDetail from './CourseDetail';
import CreateCourse from './CreateCourse';
import UpdateCourse from './UpdateCourse';
import UserSignUp from './UserSignUp';
import UserSignIn from './UserSignIn';
import NotFound from './NotFound';
import '../css/global.css';

function App() {
  return(
      <Router>
        <Switch>
          <Route exact path="/" component={Courses} />
          <Route exact path="/signup" component={UserSignUp} />
          <Route exact path="/signin" component={UserSignIn} />
          <Route exact path="/courses/create" component={CreateCourse} />
          <Route exact path="/courses/:id" component={CourseDetail} />
          <Route exact path="/courses/:id/update" component={UpdateCourse} />
          <Route component={NotFound} />
        </Switch>
      </Router>
  );
}

export default App;