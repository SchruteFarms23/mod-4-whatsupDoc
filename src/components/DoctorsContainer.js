import React from 'react';
import DoctorsList from './DoctorsList';
import Search from './Search'


class DoctorsContainer extends React.Component {
	constructor() {
	super();
	this.state = {
		searchValue: "",
		doctors: []
		}
	}

	// handleChange = () => {
	// 	fetch(https/localhost/3000/doctors){
	// 		'method':'post',
	//
	// 	}
	// }

	componentDidMount(){
		fetch('http://localhost:3000/doctors')
		.then(res => res.json())
		.then(res => this.setState({
			doctors: res
		}))

	}

	handleSearch=(event)=>{
		// console.log(event.target.value)
		const searchTerm = event.target.value
		this.setState({
			searchValue: searchTerm
		})

	}


	render() {
		console.log(this.state.searchValue)
		// console.log(this.state)
		return(
			<div>
			<Search search={this.handleSearch}/>
			<DoctorsList doctors={this.state.doctors} searched={this.state.searchValue}/>
			</div>
		)
	}
}

export default DoctorsContainer;




// <DoctorsList doctors={this.state.doctors}/>
