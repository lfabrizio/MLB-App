import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import FirstComponent from '../Learning-Examples/FirstComponent'

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






class ListTodosComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos: 
            [
                {id: 1, description: 'Learn React', done:false, targetDate: new Date()},
                {id: 2, description: 'Become an Expert at React', done:false, targetDate: new Date()},
                {id: 3, description: 'Travel', done:false, targetDate: new Date()}
            ]
        }
    }
    render() {
        return <div>
            <h1>List Todos</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>description</th>
                        <th>Target Date</th>
                        <th>Is Completed?</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.todos.map (
                        todo =>
                    <tr>
                    <td>{todo.id}</td>
                    <td>{todo.description}</td>
                    <td>{todo.done.toString()}</td>
                    <td>{todo.targetDate.toString()}</td>
                    </tr>
                    )
                    }
                </tbody>
            </table>
        </div>
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