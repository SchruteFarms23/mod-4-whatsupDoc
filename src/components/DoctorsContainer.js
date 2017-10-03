import React from 'react';
import DoctorsList from './DoctorsList';
import Search from './Search';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import DropDown from './DropDown'


class DoctorsContainer extends React.Component {
	constructor(props) {
	super(props);
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
		const insValue= event.target.value
		this.setState({
			insuranceValue: insValue
		})
	}



	render() {
		console.log(this.props)

		// console.log(this.state)
		return(
			<div>
			<DropDown insurances={this.state.doctors} handleChange={this.insuranceChange}/>
	      	<Search search={this.handleSearch}/>
	      	<Route exact path="/home" render={(props) => <DoctorsList history={this.props.history} doctors={this.state.doctors} searched={this.state.searchValue} insuranceSearch={this.state.insuranceValue}/>}/>
			</div>
		)
	}

}
export default DoctorsContainer;
// <DoctorsList doctors={this.state.doctors}/>
