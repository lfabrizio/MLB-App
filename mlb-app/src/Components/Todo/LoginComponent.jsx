import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: 'lou',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        //this.handleUsernameChange = this.handleUsernameChange.bind(this)
        //this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

   

    handleChange(event) {
       // console.log(event.target.value);
        this.setState(
            {
                [event.target.name]: event.target.value
            })
    }

    // handlePasswordChange(event) {
    //     this.setState({password: event.target.value})
    // }

    loginClicked() {
        if(this.state.username === "lou" && this.state.password=== "123"){
            
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            // this.props.history.push(`/welcome/${this.state.username}`);
            this.setState({showSuccessMessage:true})
            this.setState({hasLoginFailed:false})
        }
        else {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
        
        //console.log(this.state)
    }

    render() {
        return (
            <div>
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Successful!</div>}
                {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
            User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
            Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
            <button onClick={this.loginClicked}>Login</button>
           </div>
        )
    }

}

export default LoginComponent