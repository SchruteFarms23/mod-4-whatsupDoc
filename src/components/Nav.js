import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'


class Nav extends React.Component {
  render() {
    return (
      <div className="ui header menu">
        <NavLink activeClassName="active" className="item" to="/doctors">Home</NavLink>
        <NavLink activeClassName="active" className="item" to="/myProfile">My Profile</NavLink>
       
      </div>
    )
  }
}


export default Nav
