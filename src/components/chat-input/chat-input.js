import React, { Component } from 'react';
import './chat-input.css';

class ChatInput extends Component {
  render() {
    return (
      <div className="chat__input-wrapper">
        <input
          type="text"
          className="chat__input"
          onKeyDown={this.props.onEnter}
          placeholder="Your message ..."
        />
      </div>
    );
  }
}

export default ChatInput;
