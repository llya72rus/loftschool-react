import React, { Component } from 'react';
import './chat-input.css'


class ChatInput extends Component {

  // constructor(props) {
  //   super(props)
  // }

  // inputHandler = (e) => {
  //   if(e.keyCode === 13 && e.target.value) {
  //     console.log(e.target.value)
  //   }
  // }

  render() {
    return (
      <div className="chat__input-wrapper">
        <input type="text" className="chat__input" onKeyDown={this.props.onEnter} placeholder="Your message ..." />
      </div>
    ) 
  }
}

export default ChatInput;