import React, { Component } from 'react';
import HelloWorldService from '../../API/Todo/HelloWorldService'

class FirstComponent extends Component {
  constructor(props) {
    super(props)
    this.state={welcomeMessage:''}
    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
  }
    render() {
    return (
      <>
      <div className="firstComponent">
        
      </div>
     
      <div>
      <button onClick={this.retrieveWelcomeMessage}> Press Here</button>
      <div className="container"> {this.state.welcomeMessage}</div>
        </div>
        
      </>
    )
  }
    // retrieveWelcomeMessage() {
    //    HelloWorldService.executeHelloWorld()
    //    .then((response) => this.handleSuccessfulResponse(response) )
    //   //.catch()

    // //   HelloWorldService.executeHelloWorldBeanService()
    // //   .then(response => this.handleSuccessfulResponse(response) )
    // //   //.catch()
    //  }

    // handleSuccessfulResponse(response) {
    //   console.log(response)
    //   this.setState({ welcomeMessage : response.data.message})
     
    // }
    }
  
export default FirstComponent;