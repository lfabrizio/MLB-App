import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import FirstComponent from '../Learning-Examples/FirstComponent'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">  
            <Router>
                <>
                {/* <HeaderComponent/> */}
                <Switch>
                <Route path="./" exact component={LoginComponent}/>
                <Route path="./Welcome/:name" component={WelcomeComponent}/>
                <Route path="/FirstComponent" component={FirstComponent}/>
                <Route path="/todos" component={ListTodosComponent}/>
                <Route path="/logout" component={LogoutComponent}/>
                {/* <Route component={ErrorComponent}/> */}
                </Switch>
                {/* <FooterComponent/> */}
                </>
                </Router>     
                 <LoginComponent/>
                 <WelcomeComponent/>
                 {/* <ListTodosComponent/> */}
            </div>
        )
    }
}


class HeaderComponent extends Component {
    render() {
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



class ListTodosComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos :
                [
             {id: 1 , desription : 'Learn SQL', done: false, targetDate: new Date()},
             {id: 2 , desription : 'Become Expert in React', done: false, targetDate: new Date()},
             {id: 3 , desription : 'Visit Vegas', done: false, targetDate: new Date()}
                ]
        }
    }
    render() {
        return  (
            <div> 
            <h1>List Todos</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>description</th>
                        <th>Target Date </th>
                        <th>is Completed </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.todos.map (
                            todo => 
                            <tr>
                                <td>{todo.id}</td>
                                <td>{todo.desription}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                            </tr>
                        )
                   
                    }
                </tbody>

            </table>
            </div>
        )
    }
}
class WelcomeComponent extends Component {
    render() {
      return <div> 
         </div> //{this.props.match.params.name} <Link to="/todos">here
        //  </Link> 
     }
 }

function ErrorComponent() {
    return <div>error occurred</div>
}



class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'lou',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        // console.log(this.state);
        this.setState(
            {
                [event.target.name]
                :event.target.value
                })
    }

    // handleUsernameChange(event) {
    //     console.log(event.target.name);
    //     this.setState(
    //         {
    //             [event.target.name]
    //             :event.target.value
    //             })
    // }

    // handlePasswordChange(event) {
    //     console.log(event.target.value);
    //     this.setState({password:event.target.value})
    // }

    loginClicked() {
        if(this.state.username === 'lou' && this.state.password==='123') {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            // this.props.history.push(`/welcome/${this.state.username}`)
            this.setState({showSuccessMessage:true})
           this.setState({hasLoginFailed:false})
        }
        
        else {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
            
        // console.log(this.state)
    }

    render() {
        return (
            <div>
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Successful Login!</div>}
                {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
            User Name : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
            Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
            <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}
function ShowInvalidCredentials(props) {
    if(props.hasLoginFailed) {
        return <div>Invalid Credentials</div>
    }
    return null;
}

function ShowLoginSuccessMessage(props) {
    if(props.showSuccessMessage) {
        return <div>Login Successful</div>
    }
    return null
}


export default TodoApp