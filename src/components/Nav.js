import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'


class Nav extends React.Component {
  render() {
    return (
      <div className="ui blue header menu">
      	
	        <NavLink activeClassName="active" className="item" to="/home">Home</NavLink>
	        <NavLink activeClassName="active" className="item" to="/myProfile">My Profile</NavLink>
	        <NavLink activeClassName="active" className="item right" to="/login">Log In</NavLink>
       	
      </div>
    )
  }
}


export default Nav
