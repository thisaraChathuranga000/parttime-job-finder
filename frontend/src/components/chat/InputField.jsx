import React from 'react'
import { useState } from 'react';

function InputField({ onSendMessage }) {
    const [message, setMessage] = useState('');

    const handleMessageChange = (event) => {
      setMessage(event.target.value);
    };
  
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        onSendMessage(message);
        setMessage('');
      }
    };
  return (
    <div>
            <div className="input-field">
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={handleMessageChange}
        onKeyPress={handleKeyPress}
      />
    </div>
    </div>
  )
}

export default InputField