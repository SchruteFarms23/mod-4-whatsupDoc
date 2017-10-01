import React from 'react';

const DoctorItem = (props) => {
  console.log(props.doctor.insurance)
  if (props.doctor.image_url === "https://asset2.betterdoctor.com/assets/general_doctor_male.png" || props.doctor.image_url === "https://asset3.betterdoctor.com/assets/general_doctor_male.png" || props.doctor.image_url === "https://asset1.betterdoctor.com/assets/general_doctor_male.png"){
    props.doctor.image_url = "https://semantic-ui.com/images/avatar/large/elliot.jpg"
  }
  if (props.doctor.image_url === "https://asset2.betterdoctor.com/assets/general_doctor_female.png" || props.doctor.image_url === "https://asset1.betterdoctor.com/assets/general_doctor_female.png" || props.doctor.image_url === "https://asset3.betterdoctor.com/assets/general_doctor_female.png"){
    props.doctor.image_url = "https://semantic-ui.com/images/avatar2/large/rachel.png"
  }

  var bio = props.doctor.bio
  if(bio.length > 400){
  bio = bio.substring(0,400) + "...";
  }

   // console.log(props.doctor)
   return (
     <div className="ui card">
  <div className="image">
    <img src={props.doctor.image_url}/>
  </div>
  <div className="content">
    <a className="header">{props.doctor.name}</a>
    <div className="meta">
      <span className="date">{props.doctor.specialties.split[0]}</span>
    </div>
    <div className="description">
      {bio}
    </div>
  </div>
  <div className="extra content">
    <a>
      <i className="user icon"></i>
      {props.doctor.city},{props.doctor.state}
    </a>
  </div>
</div>
	)
 }

 export default DoctorItem







 // <div>
 // <div>
 // <img src = {props.doctor.image_url} />
 // <p>{props.doctor.name}</p>
 // <p>{props.doctor.bio}</p>
 // <div>
 // </div>
