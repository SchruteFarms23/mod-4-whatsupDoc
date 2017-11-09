import React from 'react';
// import {parseJwt} from '../services/decodeJWT'

export default class UserDoctor extends React.Component{

    handleClick=()=>{

      this.props.handleClick(this.props.doctor.id)
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
          </a> ..................... <a  className="add" onClick={this.handleClick} >Delete Doc</a>
        </div>
      </div>
      )
   }
 }
