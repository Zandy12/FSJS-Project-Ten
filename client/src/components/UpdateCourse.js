import React, {Component} from 'react';
import axios from 'axios';

export default class CreateCourse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: [],
        }
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

    render() {
        return(
            <div>
                <div class="header">
                    <div class="bounds">
                        <h1 class="header--logo">Courses</h1>
                        <nav><span>Welcome Joe Smith!</span><a class="signout" href="index.html">Sign Out</a></nav>
                    </div>
                </div>
                <hr />
                <div class="bounds course--detail">
                    <h1>Create Course</h1>
                    <div>
                        <div>
                            <h2 class="validation--errors--label">Validation errors</h2>
                            <div class="validation-errors">
                                <ul>
                                    <li>Please provide a value for "Title"</li>
                                    <li>Please provide a value for "Description"</li>
                                </ul>
                            </div>
                        </div>
                        <form>
                        <div class="grid-66">
                            <div class="course--header">
                                <h4 class="course--label">Course</h4>
                                <div>
                                    <input id="title" name="title" type="text" class="input-title course--title--input"
                                        value={this.state.content.title} />
                                </div>
                                <p>By Joe Smith</p>
                            </div>
                            <div class="course--description">
                                <div>
                                    <textarea id="description" name="description" class="" value={this.state.content.description} />
                                </div>
                            </div>
                        </div>
                        <div class="grid-25 grid-right">
                            <div class="course--stats">
                                <ul class="course--stats--list">
                                    <li class="course--stats--list--item">
                                    <h4>Estimated Time</h4>
                                    <div>
                                        <input id="estimatedTime" name="estimatedTime" type="text" class="course--time--input"
                                            value={this.state.content.estimatedTime} />
                                    </div>
                                    </li>
                                    <li class="course--stats--list--item">
                                        <h4>Materials Needed</h4>
                                        <div>
                                            <textarea id="materialsNeeded" name="materialsNeeded" class="" value={this.state.content.materialsNeeded} />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="grid-100 pad-bottom"><button class="button" type="submit">Create Course</button><button class="button button-secondary" onclick={"event.preventDefault(); location.href='/courses/" + this.props.match.params.id + "';"}>Cancel</button></div>
                        </form>
                    </div>
                </div>
            </div>          
        );
    }
}