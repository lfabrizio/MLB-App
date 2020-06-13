import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'

class AuthenticatatedRoute extends Component {
    render() {
        if(AuthenticatatedRoute.isUserLoggedIn()){
            return <Route {...this.props}/>
        } else {
           return  <Redirect to="/login"/>
        }
    }
}

export default AuthenticatatedRoute