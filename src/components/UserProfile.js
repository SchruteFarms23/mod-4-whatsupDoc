import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import UserDoctorList from './UserDoctorList';
import { logoutUser } from '../services/user'


export default class UserProfile extends React.Component{
  state = {
    user: this.props.user,
    doctors:[],
    username:"",
    isLoggedin: false
  }
componentDidMount(){
    console.log("im ok with this", this.state.user)
    fetch('http://localhost:3000/users/me',{
    method: 'POST',
    body: JSON.stringify({id: this.state.user.user.id}),
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
    // this.props.history.push("/login")
    this.setState({
      isLoggedIn: false
    })
  }





  render(){

    // console.log(this.state.doctors)
    return(
      <div>
        <UserDoctorList doctors={this.state.doctors} user={this.state.user.user.id} />
        <button onClick={this.handleLogout}>Log Out</button>
      </div>

    )
  }
}
