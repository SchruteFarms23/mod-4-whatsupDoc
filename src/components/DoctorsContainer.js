import React from 'react';
// import doctorsList from '../doctorsData';
import DoctorsList from './DoctorsList';


class DoctorsContainer extends React.Component {
	constructor() {
	super();
	this.state = {
		// doctors: doctorsList.data
		doctors: []
		}
	}

	componentDidMount() {
		 fetch(`https://api.betterdoctor.com/2016-03-01/doctors?location=NY&skip=2&limit=10&user_key=735f4d99d100c1b2011d3119ec9caa0c`)
    .then(response => { 
      return response.json().then((data) => {
       return this.setState ({
          doctors: data.data
        })
      })
    })
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