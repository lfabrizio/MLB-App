import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ListTodosComponent from './ListTodosComponents.jsx'


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

class HeaderComponent extends Component {
    render() {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    //console.log(isUserLoggedIn);

        return (
            <div>
                Header <hr/>
            </div>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="text-muted">Copyright 2020</span>

            </footer>
        )
    }
}








class WelcomeComponent extends Component {
    render() {
        return <div>
            Welcome {this.props.match.params.name}! You can manage your todos <Link to="/todos">here</Link>
            </div>
    }
}

class LogoutComponent extends Component {
    render() {
        return (
            <>
             <h1>you are logged out</h1> 
             <div className="container">
                 Thank you for using our application
             </div>
            </>
        )
    }
}

// function ErrorComponent() {
//     return <div>An Error Occured. Contact support at (555)555-5555</div>
// }

//Login Component



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