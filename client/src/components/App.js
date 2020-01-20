// Import react
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Courses from './Courses';
import CourseDetail from './CourseDetail';
import CreateCourse from './CreateCourse';
import UpdateCourse from './UpdateCourse';
import UserSignUp from './UserSignUp';
import UserSignIn from './UserSignIn';
import UserSignOut from './UserSignOut';
import NotFound from './NotFound';
import Header from './Header';
import Error from './Error';
import Forbidden from './Forbidden';
import withContext from '../Context';
import PrivateRoute from '../PrivateRoute';
import '../css/global.css';

/*************************** 
  COMPONENTS WITH CONTEXT 
****************************/

// Connect the Header component to context
const HeaderWithContext = withContext(Header);

const UserSignUpWithContext = withContext(UserSignUp);

// Connect UserSignIn to context 
const UserSignInWithContext = withContext(UserSignIn);

const UserSignOutWithContext = withContext(UserSignOut);
const CreateCourseWithContext = withContext(CreateCourse);
const UpdateCourseWithContext = withContext(UpdateCourse);
const CourseDetailWithContext = withContext(CourseDetail);

function App() {
  return(
      <Router>
        <div>
          <HeaderWithContext />
          <Switch>
            <Route exact path="/" component={Courses} />
            <Route exact path="/error" component={Error} />
            <Route exact path="/forbidden" component={Forbidden} />
            <Route exact path="/signup" component={UserSignUpWithContext} />
            <Route exact path="/signin" component={UserSignInWithContext} />
            <Route exact path="/signout" component={UserSignOutWithContext} />
            <PrivateRoute exact path="/courses/create" component={CreateCourseWithContext} />
            <Route exact path="/courses/:id" component={CourseDetailWithContext} />
            <PrivateRoute exact path="/courses/:id/update" component={UpdateCourseWithContext} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;