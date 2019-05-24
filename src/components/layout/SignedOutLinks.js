import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedOutLinks  = () => {
    return (
        <div>
            <ul className="right">
                <li><NavLink to = '/signup'>Sign Up</NavLink></li>
                <li><NavLink to = '/signin'>Log In</NavLink></li>
            </ul> 
            {/* <ul className="right hide-on-med-and-down">
                <li><NavLink to = '/signup'>Sign Up</NavLink></li>
                <li><NavLink to = '/signin'>Log In</NavLink></li>
            </ul> 
            <ul className ="sidenav" id="mobile-links">
                <li><NavLink to = '/signup'>Sign Up</NavLink></li>
                <li><NavLink to = '/signin'>Log In</NavLink></li>
            </ul>  */}
        </div>
    )
}
 
export default SignedOutLinks;
