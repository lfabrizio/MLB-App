import React, { Component } from 'react';
import HelloWorldService from '../../API/Todo/HelloWorldService'

export default class WelcomeComponent extends Component {
  constructor(props) {
    super(props)
    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
 
  }
    render() {
    return (
      <>
      <div className="firstComponent">
        
        
      </div>
      <div>
      <button onClick={this.retrieveWelcomeMessage}> Press Here</button>
        </div>
      
      </>
    )
  }
    retrieveWelcomeMessage() {
       HelloWorldService.executeHelloWorld()
       .then(response => this.handleSuccessfulResponse(response) )
      //.catch()

    //   HelloWorldService.executeHelloWorldBeanService()
    //   .then(response => this.handleSuccessfulResponse(response) )
    //   //.catch()
     }

    handleSuccessfulResponse(response) {
      console.log(response)
      this.setState({ welcomeMessage : response.data.message})
     
    }
    }
  
