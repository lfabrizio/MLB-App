import React, {Component} from 'react'

class AddApp extends Component {
    render() {
        return (
            <div className="AddApp">
                <LoginComponent/>
                <FieldComponent/>
            </div>
        )
    }
}

class LoginComponent extends Component {
    render() {
        return (
            <div id="content">
            User Name:  <input type="text" name="username"/>
            Password:  <input type="password" name="password"/>
            
            
            </div>
        )
    }
}

class FieldComponent extends Component {
    render() {
        return (
   
    <div class="loader">
    <svg id="bat" width="337" height="43" viewBox="0 0 337.4 42.6"><path class="tan" d="M95.2 12.7c-36.4 1.4-74.9-0.2-85-0.7C8.9 7.1 6 7.3 6 7.3s-6 1-6 13.8 4.7 14.8 6.5 14.8c2.5 0 3.4-4.2 3.6-5.2 10.1-0.5 48.6-2.1 85-0.7 15.5 0.6 42.9 2 72 3.6V9.1C138 10.7 110.6 12.1 95.2 12.7z"/><path class="tan" d="M323 0.1c0 0-33.5 1.7-43.1 2.5 -5.3 0.5-47.8 3-92 5.4v26.6c44.2 2.4 86.7 4.9 92 5.4 9.6 0.8 43.1 2.5 43.1 2.5s14.4 2.5 14.4-21v-0.4C337.4-2.4 323 0.1 323 0.1z"/><path class="red" d="M167.1 9.1v24.3c6.9 0.4 13.8 0.7 20.8 1.1V8C181 8.4 174 8.7 167.1 9.1z"/></svg>
    <svg id="ball" width="47" height="47" viewBox="0 0 46.6 46.6"><circle class="white" cx="23.3" cy="23.3" r="23.3"/><path class="red" d="M22.4 16.4c-5.6 0-11.9-1.2-18.1-4.8 -1.2-0.7-1.6-2.2-0.9-3.4C4.1 7 5.7 6.6 6.9 7.3c15.6 9.2 32.8 0.1 32.9 0 1.2-0.7 2.7-0.2 3.4 1 0.7 1.2 0.2 2.7-1 3.4C41.7 11.9 33.3 16.4 22.4 16.4z"/><path class="red" d="M5.6 39.1c-0.9 0-1.7-0.5-2.2-1.3 -0.7-1.2-0.2-2.7 1-3.4 0.8-0.4 19.7-10.6 37.9 0 1.2 0.7 1.6 2.2 0.9 3.4s-2.2 1.6-3.4 0.9C24 29.5 7 38.7 6.8 38.8 6.4 39 6 39.1 5.6 39.1z"/></svg>
  </div>


        )
    }
}





export default AddApp