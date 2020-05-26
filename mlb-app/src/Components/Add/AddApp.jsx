import React, {Component} from 'react'

class AddApp extends Component {
    render() {
        return (
            <div className="AddApp">
                <LoginComponent/>
            </div>
        )
    }
}

class LoginComponent extends Component {
    render() {
        return (
            <div>
        User Name: <input type="text" name="username"/>
        Password: <input type="password" name="password"/>
        <button>Login</button>
        </div>
        )
    }
}

export default AddApp