import React, {Fragment, Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import HelloWorldService from '../../API/Todo/HelloWorldService.js'

 class WelcomeComponent extends Component {
    constructor(props){
        super(props)
        this.state={welcomeMessage:''}
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
    }
    render() {
        return (
            <>
            <h1>Welcome</h1>
         <div className="container">
            Welcome 
             You
            </div>
            <div className="container">
                click for customized message
                {/* manage todos <Link to="/todos">here</Link> */}
                <button onClick={this.retrieveWelcomeMessage}>Get Message</button>
                <div className="container"> {this.state.welcomeMessage}</div>
            </div>
            </>
        )
    }

    retrieveWelcomeMessage(){
        HelloWorldService.executeHelloWorldBean()
        .then( response => this.handleSuccessfulResponse(response) )
        //.catch()
    }



     handleSuccessfulResponse(response) {
      console.log(response)
      this.setState({ welcomeMessage : response.data.message})
     
    }
 }

export default WelcomeComponent