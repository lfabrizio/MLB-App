import axios from 'axios'

//import cross origins from server
class HelloWorldService {

    executeHelloWorldService() {
        return axios.get('http://localhost:8080/hello-world');
        
    }

   
        executeHelloWorldBean() {
            return axios.get('http://localhost:8080/hello-world-bean');
            
        }

        executeHelloWorldPathVariableService(name) {
            console.log('execute service')
            return axios.get('http://localhost:8080/hello-world/path-variable/${name}')
        }
    }
    

export default new HelloWorldService()