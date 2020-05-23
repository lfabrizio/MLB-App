import React, { Component } from 'react';
import FirstComponent from './components.learning-examples/FirstComponent'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
  return (
    <div className="App">
      MLB APP
      <FirstComponent></FirstComponent>
      <ThirdComponent></ThirdComponent>
    </div>
  );
}
}

// function component
function ThirdComponent(){
  return (
    <div className="thirdComponent">
      ThirdComponent
    </div>
  );
}



export default App;
