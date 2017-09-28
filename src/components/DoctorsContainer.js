import React from 'react';
import doctorsList from '../doctorsData';
import DoctorsList from './DoctorsList';


class DoctorsContainer extends React.Component {
	constructor() {
	super();
	this.state = {
		doctors: doctorsList.data
		}
	}



	render() {
		console.log(this.state)
		return(
			<div>
				<DoctorsList doctors={this.state.doctors}/>
			</div>
		)
	}
}

export default DoctorsContainer;