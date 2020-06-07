class AuthenticationService {
    registerSuccessfulLogin(username, password){
        console.log('registered');
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout() {
        sessionStorage.removeItem('autheticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return false
        return true
    }
}

export default new AuthenticationService()