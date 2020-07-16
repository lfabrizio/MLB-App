import React, { Component } from 'react';
import TodoApp from './Components/Todo/TodoApp';
import './App.css';
import './bootstrap.css';


class App extends Component {
  render() {
    return(
      <div className="App">
        <TodoApp />
      </div>
    );
  }
}


export default App;


// class App extends Component {
//   render() {
//   return (
//     <div className="App">
//        {/* <Title/>     */}
     
//       <LoginComponent/> 
//         <TodoApp/>   
//      {/* <TodoComponent/>  */}
//      {/* <ListTodosComponent/> */}
     
//        {/* <WelcomeComponent/>  */}
//        {/* <Counter/>
        
//    <FirstComponent/> 
//    <AddApp/>  */}
//     </div>
    
    
//   );
// }
// }



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



