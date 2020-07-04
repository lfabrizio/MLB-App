import axios from 'axios'

//import cross origins from server
// added spring security validation under package SpringSecurityConfigurationBasicAuth
class HelloWorldService {

    executeHelloWorldService() {
        return axios.get('http://localhost:8080/hello-world');
        
    }

   
        executeHelloWorldBean() {
            return axios.get('http://localhost:8080/hello-world-bean');
            
        }

        executeHelloWorldPathVariableService(name) {
            // console.log('execute service')
            let username = 'lou'
            let password = '123'

            let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)
            return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`, 
            {
                headers : {
                    authorization: basicAuthHeader
                }
            }
            );
}
}


export default new HelloWorldService()