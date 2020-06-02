import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import FirstComponent from '../Learning-Examples/FirstComponent'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">  
            <Router>
                <>
                <Route path="./" exact component={LoginComponent}/>
                <Route path="./login" component={LoginComponent}/>
                <Route path="/welcome" component={FirstComponent}/>
                </>
                </Router>     
                 {/* <LoginComponent/> */}
                 {/* <WelcomeComponent/> */}
            </div>
        )
    }
}

class WelcomeComponent extends Component {
    render() {
        return <div>Welcome</div>
    }
}




class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'lou',
            password: ''
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }

    handleUsernameChange(event) {
        console.log(event.target.value);
        this.setState({username:event.target.value})
    }

    handlePasswordChange(event) {
        console.log(event.target.value);
        this.setState({password:event.target.value})
    }


    render() {
        return (
            <div>
            User Name : <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange}/>
            Password : <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
            <button>Login</button>
            </div>
        )
    }
}

// loginClicked() {
//     if(this.setState.username === 'Lou' && this.StaticRange.password === '123'){
//         this.PaymentResponse.history.push("/welcome")
//         // this.setState({showSuccessMessage:true})
//         // this.setState({hasLoginFailed:false})
//     }
// }

export default TodoApp