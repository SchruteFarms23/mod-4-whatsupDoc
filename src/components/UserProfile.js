import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import UserDoctorList from './UserDoctorList';
import { logoutUser } from '../services/user'
import {parseJwt} from '../services/decodeJWT'


export default class UserProfile extends React.Component{
  state = {
    user: parseJwt(localStorage.getItem('jwtToken')).user_id,
    doctors:[],
    username:"",
    isLoggedin: false
  }
componentDidMount(){
    const userId = parseJwt(localStorage.getItem('jwtToken')).user_id
    console.log("im ok with this")
    fetch('http://localhost:3000/users/me',{
    method: 'POST',
    body: JSON.stringify({id: userId}),
    headers: {
      "Accept":"application/json",
      "Content-Type":"application/json"
    }
  })
    .then(res => res.json())
    .then( (doctors) => {
      return this.setState({
        doctors: [...doctors]
      })
    })
  }

    handleLogout = () => {
    logoutUser()
    this.props.history.push("/login")

  }





  render(){

    // console.log(this.state.doctors)
    return(
      <div>
        <UserDoctorList doctors={this.state.doctors} user={this.state.user} />
        <button onClick={this.handleLogout}>Log Out</button>
      </div>

    )
  }
}
