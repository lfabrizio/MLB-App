import axios from 'axios'

//import cross origins from server
class HelloWorldService {

    executeHelloWorld() {
        return axios.get('http://localhost:8080/hello-world');
        
    }
}
    // class HelloWorldBeanService {
    //     executeHelloWorld() {
    //         return axios.get('http://localhost:8080/hello-world-bean');
            
    //     }

// }

export default new HelloWorldService()