import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SupportSection from './SupportSection';

const ChatBot = () => {
    <SupportSection/>
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi there! How can I help you?', isUser: false },
  ]);
  const [inputText, setInputText] = useState('');

  const handleUserInput = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    const userMessage = inputText.toLowerCase().trim();
    const predefinedQuestions = {
      'what is your name?': 'I am a RentKaro assistant.',
      'how can I contact you?': 'You can contact our customer care at 1-800-123-4567.',
      // Add more predefined questions and answers as needed
    };

    const matchedQuestion = Object.keys(predefinedQuestions).find((question) =>
      userMessage.includes(question)
    );

    const responseText = matchedQuestion
      ? predefinedQuestions[matchedQuestion]
      : "Sorry, I couldn't understand that. Please call our customer care for assistance.";

    const newMessage = { id: messages.length + 1, text: inputText, isUser: true };
    const botResponse = { id: messages.length + 2, text: responseText, isUser: false };

    setMessages([...messages, newMessage, botResponse]);
    setInputText('');
  };

  return (
    <div className="chatbot-container fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-75 z-50">
      <div className="chatbot bg-white rounded-lg shadow-lg p-6 w-96">
        <div className="h-64 overflow-y-auto">
          <AnimatePresence initial={false}>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`mb-2 ${message.isUser ? 'text-right' : 'text-left text-black'}`}
              >
                {message.text}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="mt-4 flex items-center">
          <input
            type="text"
            value={inputText}
            onChange={handleUserInput}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 p-2 rounded-md"
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
