import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

export default class Courses extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            content: [],
            validated: false,
        }
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount() {

      const {context} = this.props;

      const authUser = context.authenticatedUser;

      axios.get(`http://localhost:5000/api/courses/${this.props.match.params.id}`)
      .then(res => {
          this.setState({
            content: res.data,
            firstName: res.data.User.firstName,
            lastName: res.data.User.lastName
          }) 
        }
      )
      .catch(error => {
      console.log("Error fetching and parsing data", error);
      });    

      context.data.getCourse(this.props.match.params.id)
      .then( course => {
          if (course === null ) {
              this.setState(() => {
                  return { errors: [ 'Unable to connect to server.' ] };
              });
          } else {
              if (authUser != null) {
                if (authUser.emailAddress === course.User.emailAddress) {
                    this.setState({ validated: true });
                }
              }
            }
          })
      .catch( err => {
          console.log(err);
          this.props.history.push('/error');
      }) 

    }

    delete() {

        const {context} = this.props;

        const authUser = context.authenticatedUser;

        context.data.deleteCourse(this.props.match.params.id, authUser.emailAddress, context.password)
            .then( errors => {
                if (errors.length) {
                    this.setState({errors});
                } else {
                    console.log(`Course "${this.state.content.title}" has been successfully deleted.`);
                    this.props.history.push('/'); 
                } 
            })
            .catch( err => { // handle rejected promises
                console.log(err);
                this.props.history.push('/error'); // push to history stack
            });
    }

    update() {
        this.props.history.push(`/courses/${this.props.match.params.id}/update`); 
    }

    render() {

        return(
            <div>
                <hr />
                <div className="actions--bar">
                    <div className="bounds">
                        <div className="grid-100">
                            { (this.state.validated) ? 
                                    <span>
                                        <Link className="button" onClick={this.update} to="#">Update Course</Link>
                                        <Link className="button" onClick={this.delete} to="#">Delete Course</Link>
                                    </span> : null
                            } 
                            <Link className="button button-secondary" to="/">Return to List</Link>
                        </div>
                    </div>
                </div>
                <div className="bounds course--detail">
                    <div className="grid-66">
                        <div className="course--header">
                            <h4 className="course--label">Course</h4>
                            <h3 className="course--title">{this.state.content.title}</h3>
                            <p>By {this.state.firstName} {this.state.lastName}</p>
                        </div>
                        <div className="course--description">
                            {this.state.content.description}
                        </div>
                    </div>
                </div>
                <div className="grid-25 grid-right">
                    <div className="course--stats">
                        <ul className="course--stats--list">
                            <li className="course--stats--list--item">
                                <h4>Estimated Time</h4>
                                <h3>{this.state.content.estimatedTime}</h3>
                            </li>
                            <li className="course--stats--list--item">
                                <h4>Materials Needed</h4>
                                <ReactMarkdown source={this.state.content.materialsNeeded} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>       
        );
    }
}