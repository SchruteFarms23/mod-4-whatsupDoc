import React from 'react';
import DoctorItem from './DoctorItem'

class DoctorsList extends React.Component {

	// state = {
	// 	doctors: []
	// }

	render() {
		const insuranceSearch = this.props.insuranceSearch
		const searched = this.props.searched.toLowerCase()
		// console.log(this.props)
		if (insuranceSearch !== ""){
		var filteredDocs= this.props.doctors.filter(doctor => doctor.name.toLowerCase().includes(searched) && JSON.parse(doctor.insurance).includes(insuranceSearch)  || doctor.city.toLowerCase().includes(searched) && JSON.parse(doctor.insurance).includes(insuranceSearch) || doctor.state.toLowerCase().includes(searched) && JSON.parse(doctor.insurance).includes(insuranceSearch) || doctor.zip.includes(this.props.searched) && JSON.parse(doctor.insurance).includes(insuranceSearch) )
	}else{
		filteredDocs = this.props.doctors.filter(doctor => doctor.name.toLowerCase().includes(searched) || doctor.city.toLowerCase().includes(searched) || doctor.state.toLowerCase().includes(searched) || doctor.zip.includes(this.props.searched))
	}

		const doctorItems = filteredDocs.map((doctor, index) => {
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
