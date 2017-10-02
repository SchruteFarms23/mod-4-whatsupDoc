import React from 'react';
import DoctorsList from './DoctorsList';
import Search from './Search';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { logoutUser } from '../services/user'


class DoctorsContainer extends React.Component {
    constructor() {
    super();
    this.state = {
        searchValue: "",
        doctors: [],
        isLoggedIn: false
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/doctors')
        .then(res => res.json())
        .then(res => this.setState({
            doctors: res
        }))
    }

    handleSearch = (event) => {
        // console.log(event.target.value)
        const searchTerm = event.target.value
        this.setState({
            searchValue: searchTerm
        })
    }

    handleLogout = () => {
    	logoutUser()
    	this.setState({
    		isLoggedIn: false
    	})
    }


    render() {
        console.log(this.state.searchValue)
        // console.log(this.state)
        return(
            <div>
            	<button onClick={this.handleLogout}>Log Out</button>
	            <Search search={this.handleSearch}/>
	            <Route exact path="/doctors" render={(props) => <DoctorsList doctors={this.state.doctors} searched={this.state.searchValue}/>}/>
            </div>
        )
    }
}
export default DoctorsContainer;
// <DoctorsList doctors={this.state.doctors}/>