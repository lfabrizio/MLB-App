import React, { Component } from 'react';
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
// class component
class FirstComponent extends Component {
  render() {
  return (
    <div className="firstComponent">
      FirstComponent
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
