import React from 'react';
// import { Redirect } from 'react-router-dom'

import {parseJwt} from '../services/decodeJWT'



export default class DoctorItem extends React.Component{




  handleClick=()=>{
    console.log("clicked me thanks")
    if(localStorage.getItem('jwtToken')){
      const userId = parseJwt(localStorage.getItem('jwtToken')).user_id
      const docId = this.props.doctor.id
      fetch('http://localhost:3000/users/add',{
      method: 'PATCH',
      body: JSON.stringify({user_id: userId, doc_id: docId}),
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    })
    }else{
      this.props.history.push('/login')
    }
  }
  render(){
    if (this.props.doctor.image_url === "https://asset2.betterdoctor.com/assets/general_doctor_male.png" || this.props.doctor.image_url === "https://asset3.betterdoctor.com/assets/general_doctor_male.png" || this.props.doctor.image_url === "https://asset1.betterdoctor.com/assets/general_doctor_male.png"){
      this.props.doctor.image_url = "https://semantic-ui.com/images/avatar/large/elliot.jpg"
    }
    if (this.props.doctor.image_url === "https://asset2.betterdoctor.com/assets/general_doctor_female.png" || this.props.doctor.image_url === "https://asset1.betterdoctor.com/assets/general_doctor_female.png" || this.props.doctor.image_url === "https://asset3.betterdoctor.com/assets/general_doctor_female.png"){
      this.props.doctor.image_url = "https://semantic-ui.com/images/avatar2/large/rachel.png"
    }
    var bio = this.props.doctor.bio

    if(bio.length > 400){
      bio = bio.substring(0,400) + "...";
    }

   return (
     <div className="ui card">
      <div className="image">
       <img src={this.props.doctor.image_url}/>
      </div>
      <div className="content">
        <a className="header">{this.props.doctor.name}</a>
          <div className="meta">
            <span className="date">{this.props.doctor.specialties.split(" ")[0]}</span>
          </div>
      <div className="description">
        {bio}
      </div>
      </div>
      <div className="extra content">
        <a>
          <i className="user icon"></i>
          {this.props.doctor.city},{this.props.doctor.state}
        </a>..................... <a  className="add" onClick={this.handleClick}>Add Doc</a>
      </div>
  </div>
    )
  }

 }

 // <div>
 // <div>
 // <img src = {this.props.doctor.image_url} />
 // <p>{props.doctor.name}</p>
 // <p>{props.doctor.bio}</p>
 // <div>
 // </div>
