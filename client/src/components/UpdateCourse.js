import React from 'react';
import axios from 'axios';

export default class CreateCourse extends React.Component {

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
                <hr />
                <div className="bounds course--detail">
                    <h1>Create Course</h1>
                    <div>
                        <div>
                            <h2 className="validation--errors--label">Validation errors</h2>
                            <div className="validation-errors">
                                <ul>
                                    <li>Please provide a value for "Title"</li>
                                    <li>Please provide a value for "Description"</li>
                                </ul>
                            </div>
                        </div>
                        <form>
                        <div className="grid-66">
                            <div className="course--header">
                                <h4 className="course--label">Course</h4>
                                <div>
                                    <input id="title" name="title" type="text" className="input-title course--title--input"
                                        value={this.state.content.title} />
                                </div>
                                <p>By Jose Castro</p>
                            </div>
                            <div className="course--description">
                                <div>
                                    <textarea id="description" name="description" className="" value={this.state.content.description} />
                                </div>
                            </div>
                        </div>
                        <div className="grid-25 grid-right">
                            <div className="course--stats">
                                <ul className="course--stats--list">
                                    <li className="course--stats--list--item">
                                    <h4>Estimated Time</h4>
                                    <div>
                                        <input id="estimatedTime" name="estimatedTime" type="text" className="course--time--input"
                                            value={this.state.content.estimatedTime} />
                                    </div>
                                    </li>
                                    <li className="course--stats--list--item">
                                        <h4>Materials Needed</h4>
                                        <div>
                                            <textarea id="materialsNeeded" name="materialsNeeded" className="" value={this.state.content.materialsNeeded} />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid-100 pad-bottom"><button className="button" type="submit">Create Course</button><button className="button button-secondary" onClick={"event.preventDefault(); location.href='/courses/" + this.props.match.params.id + "';"}>Cancel</button></div>
                        </form>
                    </div>
                </div>
            </div>          
        );
    }
}