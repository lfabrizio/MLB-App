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
        

<div className="breaking_news">
  <div className="label ripple">Breaking News</div>
  <div className="news_title">Justin Verlander out with potential Tommy John Injury</div>
  {/* <marquee className="news_title"></marquee> */}
</div>
            
  <div className="container">
  
    <h2 className="main">MLB ⚾ Today</h2>
    
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
            <div className="loader">
    <svg id="bat" width="337" height="43" viewBox="0 0 337.4 42.6"><path className="tan" d="M95.2 12.7c-36.4 1.4-74.9-0.2-85-0.7C8.9 7.1 6 7.3 6 7.3s-6 1-6 13.8 4.7 14.8 6.5 14.8c2.5 0 3.4-4.2 3.6-5.2 10.1-0.5 48.6-2.1 85-0.7 15.5 0.6 42.9 2 72 3.6V9.1C138 10.7 110.6 12.1 95.2 12.7z"/><path className="tan" d="M323 0.1c0 0-33.5 1.7-43.1 2.5 -5.3 0.5-47.8 3-92 5.4v26.6c44.2 2.4 86.7 4.9 92 5.4 9.6 0.8 43.1 2.5 43.1 2.5s14.4 2.5 14.4-21v-0.4C337.4-2.4 323 0.1 323 0.1z"/><path className="red" d="M167.1 9.1v24.3c6.9 0.4 13.8 0.7 20.8 1.1V8C181 8.4 174 8.7 167.1 9.1z"/></svg>
    <svg id="ball" width="47" height="47" viewBox="0 0 46.6 46.6"><circle className="white" cx="23.3" cy="23.3" r="23.3"/><path className="red" d="M22.4 16.4c-5.6 0-11.9-1.2-18.1-4.8 -1.2-0.7-1.6-2.2-0.9-3.4C4.1 7 5.7 6.6 6.9 7.3c15.6 9.2 32.8 0.1 32.9 0 1.2-0.7 2.7-0.2 3.4 1 0.7 1.2 0.2 2.7-1 3.4C41.7 11.9 33.3 16.4 22.4 16.4z"/><path className="red" d="M5.6 39.1c-0.9 0-1.7-0.5-2.2-1.3 -0.7-1.2-0.2-2.7 1-3.4 0.8-0.4 19.7-10.6 37.9 0 1.2 0.7 1.6 2.2 0.9 3.4s-2.2 1.6-3.4 0.9C24 29.5 7 38.7 6.8 38.8 6.4 39 6 39.1 5.6 39.1z"/></svg>
  </div>s
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
        let errorMessage ='';
        if(error.message)
          errorMessage += error.message

          if(error.response && error.response.data){
            errorMessage += error.response.data.message
          }
        this.setState({welcomeMessage: errorMessage})
        
       
      }

 }

export default WelcomeComponent