import React, { Component } from 'react';
import Cookies from 'js-cookie';
import Data from './Data';

const Context = React.createContext(); 

export class Provider extends Component {

  constructor() {
    super();
    this.data = new Data();
    this.state = {
      authenticatedUser: Cookies.getJSON('authenticatedUser') || null,
      password: Cookies.getJSON('password') || null,
    }
  }

  render() {

    const { authenticatedUser } = this.state;
    const { password } = this.state;

    const value = {
      authenticatedUser,
      password,
      data: this.data,
      actions: { // Add the 'actions' property and object
        signIn: this.signIn,
        signOut: this.signOut
      }
    }

    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>  
    );
  }

  
  signIn = async (emailAddress, password) => {
    const user = await this.data.getUser(emailAddress, password);
    if (user !== null) {
      this.setState(() => {
        return {
          authenticatedUser: user,
          password: password,
        };
      });
      // Set cookie
      Cookies.set('authenticatedUser', JSON.stringify(user), { expires: 1 });
      Cookies.set('password', JSON.stringify(password), { expires: 1 });
    }
    return user;
  }

  // Function to sign-out a user
  signOut = () => {
    this.setState(() => {
      return {
        authenticatedUser: null,
        password: null,
      };
    });
    Cookies.remove('authenticatedUser');
    Cookies.remove('password');
  }
}

export const Consumer = Context.Consumer;

/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */

export default function withContext(Component) {
  return function ContextComponent(props) {
    return (
      <Context.Consumer>
        {context => <Component {...props} context={context} />}
      </Context.Consumer>
    );
  }
}

