import React, { Component } from 'react';
import axios from 'axios';

export default class Courses extends Component {

    /* componentDidMount() {
      axios.get(`http://localhost:5000/api/courses`)
      .then(res => {
          console.log(res);
          /* this.setState({
              content: res.status,
          }) 
        }
      )
      .catch(error => {
      console.log("Error fetching and parsing data", error);
      });    
    } */

    render() {
        return(
            <h3>This is some content.</h3>
        );
    }
}