import React from 'react';
import DoctorItem from './DoctorItem'

class DoctorsList extends React.Component {

	// state = {
	// 	doctors: []
	// }

	render() {
		const searched = this.props.searched.toLowerCase()
		// console.log(this.props)
		const filteredDocs= this.props.doctors.filter(doctor => doctor.name.toLowerCase().includes(searched))


		const doctorItems = filteredDocs.map((doctor, index) => {
		// console.log(this.props)
		const doctorItems = this.props.doctors.map((doctor, index) => {
			return <DoctorItem key={index} doctor={doctor}/>
		})
		return (
			<div className="ui cards">
				{doctorItems}
			</div>
		)
	}
}

export default DoctorsList;
