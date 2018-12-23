
import React, { Component } from 'react';
import ChatList from '../chat-list/chat-list';
import ChatInput from '../chat-input/chat-input'
import './app.css'

 class App extends Component {
   state = {
    messages: ['Item']
   }

   messages = this.state.messages;

  inputHandler = (e) => {
    if(e.keyCode === 13 && e.target.value) {
      this.messages.push(e.target.value)
      // this.setState({
      //   messages: e.target.value
      // });
      e.target.value = '';
      console.log(this.state)
    }
  }

   render() {
     return (
       <div className="App chat">
          <ChatList messages={this.state.messages} / >
          <ChatInput 
            onEnter={this.inputHandler}

          / >
        </div>
    )

   }
  
}

export default App;