import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'

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

export default HeaderComponent