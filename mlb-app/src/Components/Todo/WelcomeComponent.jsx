import React, {Fragment, Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import HelloWorldService from '../../API/Todo/HelloWorldService.js'
import '../Learning-Examples/Title.css'


 class WelcomeComponent extends Component {
    constructor(props){
        super(props)
        this.state={welcomeMessage:''}
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
        this.handleError = this.handleError.bind(this);
    }
    render() {
        return (
            <>
            <header>
  <div className="container">

    <p className="main">MLB ⚾ APP</p>
    
  </div>
  <ul>
    <li><a href="https://github.com/lfabrizio/MLB-App"><span data-text="News">News</span></a></li>
    <li><a href="https://www.mlb.com/scores"><span data-text="Scores">Scores</span></a></li>
    <li><a href="https://www.mlb.com/standings"><span data-text="Standings">Standings</span></a></li>
    <li><a href="https://www.baseball-reference.com/"><span data-text="Statistics">Statistics</span></a></li>
    <li><a href="https://www.cbssports.com/fantasy/baseball/rankings/"><span data-text="Fantasy">Fantasy Baseball</span></a></li>
  </ul>
</header>
            {/* <h1>Welcome</h1> */}
         <div className="container">
            {/* Welcome  */}
             {this.props.match.params.name}
            </div>
            <div className="message">
                Click for Customized Message
                {/* manage todos <Link to="/todos">here</Link> */}
                <button onClick={this.retrieveWelcomeMessage}> Message</button>
                <div className="message"> {this.state.welcomeMessage}</div>
            </div>
            </>
        )
    }

    retrieveWelcomeMessage(){
        HelloWorldService.executeHelloWorldBean()
        .then( response => this.handleSuccessfulResponse(response) )
        // //.catch()

        // HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
        // .then( response => this.handleSuccessfulResponse(response) )
        // .catch(error => this.handleError(error.response))
    }



     handleSuccessfulResponse(response) {
      console.log(response)
      this.setState({ welcomeMessage : response.data.message})
     
    }

    handleError(error) {
        console.log(error.response)
        this.setState({welcomeMessage: error.response.data.message})
        
       
      }

 }

export default WelcomeComponent