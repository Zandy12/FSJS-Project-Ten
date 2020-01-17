import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Courses from './Courses';
import CourseDetail from './CourseDetail';
import CreateCourse from './CreateCourse';
import UpdateCourse from './UpdateCourse';
import UserSignUp from './UserSignUp';
import UserSignIn from './UserSignIn';
import NotFound from './NotFound';
import Header from './Header';
import Error from './Error';
import withContext from '../Context';
import '../css/global.css';

// Connect the Header component to context
const HeaderWithContext = withContext(Header);
const UserSignUpWithContext = withContext(UserSignUp);
// Connect UserSignIn to context 
const UserSignInWithContext = withContext(UserSignIn);

function App() {
  return(
      <Router>
        <div>
          <HeaderWithContext />
          <Switch>
            <Route exact path="/" component={Courses} />
            <Route exact path="/error" component={Error} />
            <Route exact path="/signup" component={UserSignUpWithContext} />
            <Route exact path="/signin" component={UserSignInWithContext} />
            <Route exact path="/courses/create" component={CreateCourse} />
            <Route exact path="/courses/:id" component={CourseDetail} />
            <Route exact path="/courses/:id/update" component={UpdateCourse} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;