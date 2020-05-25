import React, {Component} from 'react'
import './Counter.css'


 class Counter extends Component{
    // define instial state in constructor 
    //state => counter 0
    constructor() {
        super();
        this.state = {
            counter : 55
        }
        this.increment = this.increment.bind(this);
    }
     render() {
    return (
      <div className="counter">
        <button onClick={this.increment}>Days til Season Resumes</button>
        <span className="count">{this.state.counter}</span>
      </div>
    );
  }

 increment() { //update state
    // console.log('increment');
    this.state.counter--;
    this.setState({
        counter: this.state.counter --
    });
    
}
 }
  export default Counter