import React from 'react'
// import { loginUser } from '../services/user';
// import { Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


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



// <form onSubmit={this.handleSubmit}>
//                 <strong><label>Username</label></strong>
//                 <input type="text" placeholder="Username" onChange={this.handleUsernameChange} value={this.state.username}/>
//                 <strong><label>Password</label></strong>
//                 <input type="password" placeholder="password" onChange={this.handlePasswordChange} value={this.state.password}/>
//                 <button className="ui basic blue button" type="submit">Submit</button>
//               </form>
//             </ul>


  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })

  }
  render() {

    // console.log("RENDERING")
    // ARE WE LOGGED IN
      return (
        <div>
          <MuiThemeProvider>
            <div>
            <ul>
              <TextField
                hintText="Enter your Username"
                floatingLabelText="Username"
                onChange={this.handleUsernameChange} value={this.state.username} />
                <br />
              <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange={this.handlePasswordChange} value={this.state.password} />
                <br />
              <RaisedButton label="Submit" primary={true} style={style} onClick={this.handleSubmit}/>
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

export default LoginForm


