import React, { Component } from 'react';
import HelloWorldService from '../../API/Todo/HelloWorldService'

export default class FirstComponent extends Component {
  constructor(props) {
    super(props)
    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
    this.state = {
      welcomeMessage : ''
    }
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
  }
    render() {
    return (
      <>
      <div className="firstComponent">
        Get customized welcome message
        <button onClick={this.retrieveWelcomeMessage}> Press Here</button>
      </div>
      
       <div> {this.state.welcomeMessage} </div>
      
      </>
    )
  }
    retrieveWelcomeMessage() {
      HelloWorldService.executeHelloWorld()
      .then(response => this.handleSuccessfulResponse(response) )
      //.catch()
    }

    handleSuccessfulResponse(response) {
      this.setState({ welcomeMessage : response.data})
     
    }
    
  }
