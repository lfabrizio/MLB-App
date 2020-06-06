class AuthenticationService {
    registerSuccessfulLogin(username, password){
        console.login('registered');
        sessionStorage.setItem('authenticatedUser', username);
    }
}

export default new AuthenticationService()