import React, { Component } from 'react';
import DoctorsContainer from './DoctorsContainer';
import UserProfile from './UserProfile';
import Nav from './Nav';
import { Route } from 'react-router-dom';
// import LoginScreen from './LoginScreen';
import LoginForm  from './LoginForm';
import { loginUser, logoutUser } from '../services/user';
import Home from './Home';
import HOC from './Hoc';
import Authorize from './Authorize';
import SignUp from './SignUp'

 


// import './App.css';

class App extends Component {

	state = {
		user: {},
		isLoggedIn: false,
    	doctors: [],
      loginPage: []

	}

	login = (loginParams) => {
		loginUser(loginParams)
		.then((user) => {
			localStorage.setItem("jwtToken", user.jwt)
			this.setState({
				user: user,
				isLoggedIn: true
			})
		})
	}

  

  // componentWillMount() {
  //   var loginPage =[];
  //   loginPage.push(<LoginScreen parentContext={this}/>);
  //          this.setState({
  //               loginPage:loginPage
  //                   })
  
  // }


	logout = () => {
		logoutUser()
		this.setState({
			user: null,
			isLoggedIn: false
		})
	}

  // signUp =  signUpUser(signUpParams)
  //   .then((user) => {
  //     localStorage.setItem("jwtToken", user.jwt)
  //     this.setState({
  //       user: user,
  //       isLoggedIn: true
  //     })
  //   })
  // }

  // fetchDoctors = () => {
  //   console.log("im ok with this", this.state.user)
  //   fetch('http://localhost:3000/users/me',{
  //   method: 'POST',
  //   body: JSON.stringify({id: this.state.user.user.id}),
  //   headers: {
  //     "Accept":"application/json",
  //     "Content-Type":"application/json"
  //   }
  // })
  //   .then(res => res.json()).then( (doctors) => {
  //     // debugger
  //     return this.setState({doctors: [...doctors]})
  //   })
  // }


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
    const AuthMyProfile = Authorize(UserProfile)
    // const AuthSignUp = Authorize(SignUp)

    return (
      <div className="App">

      	<NewHome show={true} user={this.state.user}/>

      	<Route path="/" component={Nav}/>

        <Route path="/signUp" render={(props) => <SignUp {...props}/>}/>
      	<Route path="/login" render={(props) => <AuthLoginForm onLogin={this.login} {...props} />}/>
      	<Route path="/home" render={(props) => <AuthDoctorsContainer {...props} />} />
        <Route path="/myProfile" render={(props) => <AuthMyProfile {...props} user={this.state.user} />} />

      </div>
  );
  }
}

export default App;
