import React from 'react';

import DoctorsList from './DoctorsList';
import Search from './Search'
import DropDown from './DropDown'


class DoctorsContainer extends React.Component {
	constructor() {
	super();
	this.state = {
		searchValue: "",
		insuranceValue:"",
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

	insuranceChange=(event)=>{
		console.log(event.target.value)
		const insValue= event.target.value
		this.setState({
			insuranceValue: insValue
		})
    
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
		console.log(this.state.searchValue)
		// console.log(this.state)
		return(
			<div>
			<DropDown insurances={this.state.doctors} handleChange={this.insuranceChange}/>
			<Search search={this.handleSearch}/>
			<DoctorsList doctors={this.state.doctors} searched={this.state.searchValue} insuranceSearch={this.state.insuranceValue}/>
			</div>
		)
	}
}

export default DoctorsContainer;




// <DoctorsList doctors={this.state.doctors}/>
