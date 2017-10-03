import React from 'react';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../services/user';


class Nav extends React.Component {

	state = {
		isLoggedin: false
	}

	
	handleLogout = () => {
    logoutUser()
    this.props.history.push("/login")

  }



  render() {

  	if (localStorage.getItem('jwtToken')) {
  		return (
  			<div className="ui blue header menu">
	  			<NavLink activeClassName="active" className="item" to="/home">Home</NavLink>
		        <NavLink activeClassName="active" className="item" to="/myProfile">My Profile</NavLink>
		        <NavLink activeClassName="active" className="item right" to="/login" onClick={this.handleLogout} >Log Out</NavLink>
  			</div>
		)
  	} else {
    return (
      	<div className="ui blue header menu">
      	
	        <NavLink activeClassName="active" className="item" to="/home">Home</NavLink>
	        <NavLink activeClassName="active" className="four wide item right" to="/signUp">Sign Up</NavLink>
	        <NavLink activeClassName="active" className="item right" to="/login">Log In</NavLink>
       	
     	 </div>
    	)
	}	
  }
}


export default Nav
