
import React, { Component } from 'react';
import ChatList from '../chat-list/chat-list';
import ChatInput from '../chat-input/chat-input'
import './app.css'

 class App extends Component {
   state = {
    messages: []
   }

   messages = this.state.messages;

   inputHandler = (e) => {
    const { messages } = this.state;
    if(e.key === 'Enter' && e.target.value) {
      // this.messages.push(e.target.value);
      this.setState({
        messages: [...messages, e.target.value]
      });
      e.target.value = '';
      console.log(this.state)
    }
  }


   func = (e) => {
    this.inputHandler(e);
  }

   render() {
     return (
       <div className="App chat">
          <ChatList messages={this.state.messages} / >
          <ChatInput 
            onEnter={this.func}

          / >
        </div>
    )

   }
  
}

export default App;