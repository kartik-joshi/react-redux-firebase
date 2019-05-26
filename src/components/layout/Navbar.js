import React from 'react';
import {Link}  from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import {connect} from'react-redux';
import {signOut} from '../../store/actions/authActions'
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';

class Navbar extends React.Component {
    componentDidMount () {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);
    }
    render()  {
        const props = this.props;
        const {auth} =  props;
    
    const links  = auth.uid 
                ?  
                <div>
                    <nav className="nav-wrapper grey darken-3">
                        <div className="container">
                            <Link to ='/' className = "brand-logo">Project Plan</Link>
                            <a href = "" className ="sidenav-trigger" data-target="mobile-links">
                                <i className="material-icons">menu</i>
                            </a>
                            <ul className="right hide-on-med-and-down">
                                <li><NavLink to = '/create'>New Project</NavLink></li>
                                <li><a onClick ={props.signOut}>Log Out</a></li>
                                <li><NavLink to = '/' className = 'btn btn-floating lighten-1'> {props.profile.initials}</NavLink></li>
                            </ul> 
                        </div>
                    </nav>
                    <ul className="sidenav" id="mobile-links">
                        <li><NavLink to = '/create'>New Project</NavLink></li>
                        <li><a onClick ={props.signOut}>Log Out</a></li>
                    </ul>
                </div>
                : 
                <div>
                    <nav className="nav-wrapper grey darken-3">
                        <div className="container">
                            <Link to ='/' className = "brand-logo">Project Plan</Link>
                            <a href = "" className ="sidenav-trigger" data-target="mobile-links">
                                <i className="material-icons">menu</i>
                            </a>
                            <ul className="right hide-on-med-and-down">
                                <li><NavLink to = '/signup'>Sign Up</NavLink></li>
                                <li><NavLink to = '/signin'>Log In</NavLink></li>
                            </ul> 
                        </div>
                    </nav>
                    <ul className ="sidenav" id="mobile-links">
                        <li><NavLink to = '/signup'>Sign Up</NavLink></li>
                        <li><NavLink to = '/signin'>Log In</NavLink></li>
                    </ul>
                </div>
        return(
            <div>
                {links}
            </div>
        
        )
        }
}

const mapStateToProps = (state) => {
    return  { 
        auth : state.firebase.auth,
        profile : state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut : () => dispatch(signOut())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Navbar);