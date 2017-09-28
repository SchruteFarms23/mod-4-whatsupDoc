import React from 'react';

const DoctorItem = (props) => {
   // console.log(props.doctor)
   return (
   		<div>
   			<ol>
   				<p>{props.doctor.profile.bio}</p>
   			</ol>
		</div>
	)
 }
 
 export default DoctorItem