import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import UserDoctorList from './UserDoctorList';
import {parseJwt} from '../services/decodeJWT'


export default class UserProfile extends React.Component{
  state = {
    user: parseJwt(localStorage.getItem('jwtToken')).user_id,
    doctors:[],
    username:"",
    deletedoc:"",
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

  //   handleLogout = () => {
  //   logoutUser()
  //   this.props.history.push("/login")

  // }

  handleClick=(id)=>{
    console.log(id)
    console.log(this.state.deletedoc)
      const userId = parseJwt(localStorage.getItem('jwtToken')).user_id
      const docId = id

      fetch('http://localhost:3000/users/delete',{
      method: 'DELETE',
      body: JSON.stringify({user_id: userId, doc_id: docId}),
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    }).then(res=>res.json()).then( res => {
      let doctors = this.state.doctors.filter(doc => doc.id !== id)
      this.setState({
      doctors:[...doctors]
    })})
  }



  //   const userId = parseJwt(localStorage.getItem('jwtToken')).user_id
  //   const docId = this.props.doctor.id
  //   fetch('http://localhost:3000/users/delete',{
  //   method: 'DELETE',
  //   body: JSON.stringify({user_id: userId, doc_id: docId}),
  //   headers: {
  //     "Accept":"application/json",
  //     "Content-Type":"application/json"
  //   }
  // })






  render(){

    // console.log(this.state.doctors)
    return(
      <div>
        <UserDoctorList doctors={this.state.doctors} user={this.state.user} handleClick={this.handleClick}  />
        
      </div>

    )
  }
}

//<button className="ui basic blue button" onClick={this.handleLogout}>Log Out</button>
