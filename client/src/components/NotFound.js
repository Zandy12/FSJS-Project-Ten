import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NotFound() {
    return(
        <div>
            <div className="header">
                <div className="bounds">
                    <h1 className="header--logo">Courses</h1>
                    <nav>
                        <NavLink className="signup" to="/signup">Sign Up</NavLink>
                        <NavLink className="signin" to="/signin">Sign In</NavLink>
                    </nav>
                </div>
            </div>
            <hr />
            <div className="bounds">
                <h1>Not Found</h1>
                <p>Sorry! We couldn't find the page you're looking for.</p>
            </div>
        </div>
    );
}