import React from 'react';
import './chat-list.css'

// class ChatList extends Component {
//   render() {
//     return(
//       <ul className="chat__list">
        
//       </ul>
//     )
//   }
// }

// export default ChatList;

export default (props) => {
  console.log(props.messages)
  const messages = props.messages.map(message => {
    console.log(message)
    // const { id, ...itemProps } = message;
    return (
      <li className="chat__list-item" >
        {message}
      </li>
    )
  });

  return (
    <ul className="chat__list">
      { messages }
    </ul>
  )
};