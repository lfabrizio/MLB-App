import axios from 'axios'

//import cross origins from server
class HelloWorldService {
    executeHelloWorld() {
        return axios.get('http://localhost:8080/hello-world');
        
    }

}

export default new HelloWorldService()