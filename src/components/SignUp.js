import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import LoginForm from './LoginForm'


class SignUp extends React.Component {

	state = {
		username: "",
		password: ""
	}

	handleSubmit = (event) => {
		event.preventDefault()
		const signupParams = {
    		username: this.state.username,
    		password: this.state.password }
    	const body= JSON.stringify(signupParams)
    	return fetch("http://localhost:3000/users",{
    		method: 'post',
   			 body: body,
    		headers: {
      		"Accept":"application/json",
      		"Content-Type":"application/json"
    	}
  		})
    	.then((res) => {
      	return res.json()})
      	.then((user) => {
			localStorage.setItem("jwtToken", user.jwt)
			})
    	.then((res) => this.props.history.push('/myProfile'))

	}

	handleUsernameChange = (event) => {
    	this.setState({
        username: event.target.value
    })

  }

	handlePasswordChange = (event) => {
	    this.setState({
	    password: event.target.value
    })

  }

	render() {
		return(
			<div>
				<MuiThemeProvider>
					<div>
					<ul>
						<TextField
							hintText="Create your Username"
							floatingLabelText="Create your Username"
							onChange={this.handleUsernameChange} value={this.state.username} />
							<br />
						<TextField
							type="password"
							hintText="Create your Password"
							onChange={this.handlePasswordChange} value={this.state.password} />
							<br />
						<RaisedButton label="Submit" primary={true} style={style} onClick={this.handleSubmit} />
					</ul>
					</div>
				</MuiThemeProvider>
			</div>
		)
	}
}

const style = {
margin: 15,

}

export default SignUp
