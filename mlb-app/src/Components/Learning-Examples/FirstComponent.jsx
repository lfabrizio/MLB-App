import React, { Component } from 'react';
// class component
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
      console.log('retrieve message')
    }
    
  }
