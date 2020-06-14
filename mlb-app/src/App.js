import React, { Component } from 'react';
import FirstComponent from './Components/Learning-Examples/FirstComponent'
import SecondComponent from './Components/Learning-Examples/SecondComponent'
import ThirdComponent from './Components/Learning-Examples/ThirdComponent'
import AddApp from './Components/Add/AddApp'
import Title from './Components/Learning-Examples/Title'
import Counter from './Components/counter/counter'
import TodoApp from './Components/Todo/TodoApp'
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
import WelcomeComponent from './Components/Todo/WelcomeComponent';
import LoginComponent from './Components/Todo/LoginComponent';

class App extends Component {
  render() {
  return (
    <div className="App">
       <Title/>   
     
      <LoginComponent/> 
      <WelcomeComponent/>
      {/* //* <Counter/>
       <TodoApp/>    */}
  {/* <FirstComponent/> 
   <AddApp/>  */}
    </div>
    
    
  );
}
}



// class LearningComponents extends Component {
//   render() {
//     return (
//       <div className="LearningComponents">
//         MLB APP
//         <FirstComponent></FirstComponent>
//         <SecondComponent></SecondComponent>
//         <ThirdComponent></ThirdComponent>
//       </div>
//     );
//   } 
// }



export default App;
