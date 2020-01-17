import React, { Component } from 'react';

export default class UserSignIn extends Component {
    render() {
        return(
          <div>
            <div class="header">
              <div class="bounds">
                <h1 class="header--logo">Courses</h1>
                <nav><a class="signup" href="/signup">Sign Up</a><a class="signin" href="/signin">Sign In</a></nav>
              </div>
            </div>
            <hr />
            <div class="bounds">
              <div class="grid-33 centered signin">
                <h1>Sign In</h1>
                <div>
                  <form>
                    <div><input id="emailAddress" name="emailAddress" type="text" class="" placeholder="Email Address" value="" /></div>
                    <div><input id="password" name="password" type="password" class="" placeholder="Password" value="" /></div>
                    <div class="grid-100 pad-bottom"><button class="button" type="submit">Sign In</button><button class="button button-secondary" onclick="event.preventDefault(); location.href='/';">Cancel</button></div>
                  </form>
                </div>
                <p>&nbsp;</p>
                <p>Don't have a user account? <a href="/signup">Click here</a> to sign up!</p>
              </div>
            </div>
          </div>
        );
    }
}