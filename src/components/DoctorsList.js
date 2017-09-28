import React from 'react';
import DoctorItem from './DoctorItem'

class DoctorsList extends React.Component {

	// state = {
	// 	doctors: []
	// }

	render() {
		console.log(this.props)
		const doctorItems = this.props.doctors.map((doctor, index) => {
			return <DoctorItem key={index} doctor={doctor}/>
		})
		return (
			<div>
				{doctorItems}
			</div>
		)
	}
}

export default DoctorsList;