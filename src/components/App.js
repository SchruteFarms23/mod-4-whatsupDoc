import React, { Component } from 'react';
import DoctorsContainer from './DoctorsContainer';
import Nav from './Nav';
import { Route, Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import { loginUser, logoutUser } from '../services/user';
import Home from './Home';
import HOC from './Hoc'
import Authorize from './Authorize'



// import './App.css';

class App extends Component {

	state = {
		user: {},
		isLoggedIn: false
	}

	login = (loginParams) => {
		loginUser(loginParams)
		.then((user) => {
			localStorage.setItem("jwtToken", user.jwt)
			this.setState({
				user,
				isLoggedIn: true
			})
		})
	}

	logout = () => {
		logoutUser()
		this.setState({
			user: null,
			isLoggedIn: false
		})
	}

	componentDidMount() {
		fetch("http://localhost:3000/welcome")
		.then((res) => res.json())
		.then((json) => {
			console.log(json)
		})
	}

  render() {

  	const NewHome = HOC(Home, this.state.user)
  	const AuthDoctorsContainer = Authorize(DoctorsContainer)
  	const AuthLoginForm = Authorize(LoginForm)
    
    return (
      <div className="App">
      	<NewHome show={true} user={this.state.user}/>

      	<Route path="/" component={Nav}/>

      	<Route path="/login" render={(props) => <AuthLoginForm onLogin={this.login} {...props} />}/>
      	<Route path="/doctors" render={(props) => <AuthDoctorsContainer {...props} />} />
      </div>
  );
  }
}

export default App;
