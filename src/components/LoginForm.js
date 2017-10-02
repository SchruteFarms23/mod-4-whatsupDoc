import React from 'react'
import { loginUser } from '../services/user'
import { Redirect } from 'react-router-dom'


class LoginForm extends React.Component {

  state = {
    username: "",
    password: ""
  }


  handleSubmit = (event) => {
    event.preventDefault()
    console.log("Clicking Button", this.state.username, this.state.password)
    // send some api call to the backend
    // clear fields
    const loginParams = { username: this.state.username, password: this.state.password}
    this.props.onLogin(loginParams)
    this.setState({
      username: "",
      password: ""
    })

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

    // console.log("RENDERING")
    // ARE WE LOGGED IN
      return (
        <div className="ui form">
          <div className="ui eight wide field">
            <form onSubmit={this.handleSubmit}>
              <strong><label>Username</label></strong>
              <input type="text" placeholder="Username" onChange={this.handleUsernameChange} value={this.state.username}/>
              <strong><label>Password</label></strong>
              <input type="password" placeholder="password" onChange={this.handlePasswordChange} value={this.state.password}/>
              <button className="ui basic blue button" type="submit">Submit</button>
            </form>
          </div>
        </div>
      )

  }


}

export default LoginForm