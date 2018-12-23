import React from 'react';
import './chat-list.css';

export default props => {
  console.log(props.messages);

  return (
    <ul className="chat__list">
      {props.messages.map(message => (
        <li className="chat__list-item">{message}</li>
      ))}
    </ul>
  );
};
