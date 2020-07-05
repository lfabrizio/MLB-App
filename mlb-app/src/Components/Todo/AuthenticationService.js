import axios from 'axios'

class AuthenticationService {
    registerSuccessfulLogin(username, password){
        console.log('registered');
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors()
    }

    logout() {
        sessionStorage.removeItem('autheticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return false
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return ''
        return user
    }

    setupAxiosInterceptors() {
        let username = 'lou'
        let password = '123'

        let basicAuthHeader = 'Basic' + window.btoa(username + ":" + password)
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()) {
                config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )
    }

}

export default new AuthenticationService()