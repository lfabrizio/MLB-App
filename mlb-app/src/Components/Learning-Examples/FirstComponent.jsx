import React, { Component } from 'react';
import HelloWorldService from '../../API/Todo/HelloWorldService'

export default class FirstComponent extends Component {
  constructor(props) {
    super(props)
    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
  }
    render() {
    return (
      <div className="firstComponent">
        Get customized welcome message
        <button onClick={this.retrieveWelcomeMessage}> Press Here</button>
      </div>
    );
  }
    retrieveWelcomeMessage() {
      HelloWorldService.executeHelloWorld()
      .then(response => console.log(response) )
      //.catch()
    }
    
  }
