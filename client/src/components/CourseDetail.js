import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Markup } from 'interweave';
import axios from 'axios';

export default class Courses extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: [],
        }
        this.renderCourse.bind(this);
    }

    componentDidMount() {
      axios.get(`http://localhost:5000/api/courses/${this.props.match.params.id}`)
      .then(res => {
          this.setState({
            content: res.data,
          }) 
        }
      )
      .catch(error => {
      console.log("Error fetching and parsing data", error);
      });    
    }

    renderCourse() {
        let course = `
                <div class="header">
                    <div class="bounds">
                        <nav><span>Welcome Joe Smith!</span><a class="signout" href="/signout">Sign Out</a></nav>
                    </div>
                </div>
                <hr />
                <div class="actions--bar">
                    <div class="bounds">
                        <div class="grid-100">
                            <span>
                                <a class="button" href="/courses/${this.props.match.params.id}/update">Update Course</a>
                                <a class="button" href="#">Delete Course</a>
                            </span>
                            <a class="button button-secondary" href="/">Return to List</a>
                        </div>
                    </div>
                </div>
                <div class="bounds course--detail">
                    <div class="grid-66">
                        <div class="course--header">
                            <h4 class="course--label">Course</h4>
                            <h3 class="course--title">${this.state.content.title}</h3>
                            <p>By Joe Smith</p>
                        </div>
                        <div class="course--description">
                            ${this.state.content.description}
                        </div>
                    </div>
                </div>
                <div class="grid-25 grid-right">
                    <div class="course--stats">
                        <ul class="course--stats--list">
                            <li class="course--stats--list--item">
                                <h4>Estimated Time</h4>
                                <h3>${this.state.content.estimatedTime}</h3>
                            </li>
                            <li class="course--stats--list--item">
                                <h4>Materials Needed</h4>
                                <ul>
                                    <li>${this.state.content.materialsNeeded}</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>`;
        return course; 
    }

    render() {
        return(
            <div>
                <Markup content={this.renderCourse()} />
            </div>
        );
    }
}