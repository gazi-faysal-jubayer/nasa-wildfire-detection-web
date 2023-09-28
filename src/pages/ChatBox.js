// src/ChatBox.js
import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react';
import '../assets/css/ChatBox.css';


const ChatBox = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [isChatInitialized, setIsChatInitialized] = useState(false);

  useEffect(() => {
    if (!isChatInitialized) {
      setIsChatInitialized(true);

      // Simulate a response from the bot when the chat is first initialized
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Welcome to the chat!', isUser: false },
        ])
      }, 1000); // Delay for the initial bot message
    }
  }, [isChatInitialized]);

  const handleSendMessage = () => {
    if (messageInput.trim() !== '') {
      const lowercaseMessage = messageInput.toLowerCase();
      let response = '';


      if (lowercaseMessage.includes('hello')) {
        response = 'Hello there!';
      }
      if (lowercaseMessage.includes('bye')) {
        response = 'Goodbye!';
      }


      // Send the user's message first
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: messageInput, isUser: true },
      ]);

      // Then send the bot's response (if any)
      if (response !== '') {
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: response, isUser: false },
          ]);
        }, 500); // Delay for demonstration purposes
      }

      setMessageInput('');
    }
  };

  const filteredMessages = messages.filter((message, index) => !(index === 0 && message.isUser === false));

  return (
    <div className="chat-box">
      <div className="chat-header">
        <span>Chat Box</span>
        <Icon icon="zondicons:close-solid" className="close-button" onClick={onClose} />
      </div>
      <div className="chat-messages">
        {filteredMessages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.isUser ? 'user-message' : 'other-message'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          className="chat-input"
          placeholder="Type a message..."
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <button className="send-button" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
