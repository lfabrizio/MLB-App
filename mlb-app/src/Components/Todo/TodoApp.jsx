import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import LoginComponent from './LoginComponent.jsx'
import ListTodosComponent from './ListTodosComponents.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import LogoutComponent from './LogoutComponent'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <Switch>
                    <Route path="/" exact component={LoginComponent} />
                    <Route path="/login" component={LoginComponent} />
                    <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
                    <AuthenticatedRoute path="/todos" component={ListTodosComponent} />
                    {/* <Route component={ErrorComponent}/> */}
                    </Switch>
                </Router>
                {/* <LoginComponent/> */}
                 {/* <WelcomeComponent/> */}
                 {/* <ListTodosComponent/> */}
                
            </div>
        )
    }
}

// function ShowInvalidCredentials(props) {
//       if(props.hasLoginFailed) {
//           return <div>Invalid Credentials</div>
//       }  
//       return null
// }

// function ShowLoginSuccessMessage(props) {
//     if (props.showSuccessMessage) {
//         return <div>Success!</div>
//     }
//     return null
// }

export default TodoApp