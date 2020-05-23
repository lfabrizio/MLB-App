import React, { Component } from 'react';
import FirstComponent from './Components/Learning-Examples/FirstComponent'
import SecondComponent from './Components/Learning-Examples/SecondComponent'
import ThirdComponent from './Components/Learning-Examples/ThirdComponent'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
  return (
    <div className="App">
      MLB APP
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
    </div>
  );
}
}





export default App;
