import React, { useState } from 'react';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
  
    const handleSendMessage = () => {
        console.log(messageInput)
      setMessages([...messages, messageInput]);
      setMessageInput('');
    };
  
    return (
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
        <input type="text" value={messageInput} onChange={(e) => setMessageInput(e.target.value)} />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    );
};

export default Chat;