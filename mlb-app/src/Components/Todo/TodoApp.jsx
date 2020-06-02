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
    render() {
        return (
            <div>
            User Name : <input type="text" name="username"/>
            Password : <input type="password" name="password"/>
            <button>Login</button>
            </div>
        )
    }
}

export default TodoApp