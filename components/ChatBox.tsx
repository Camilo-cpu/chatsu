'use client';  // Indicates that this code runs on the client side, specific to Next.js

import React, { useState } from 'react';  // Importing React and the useState hook
import ChatForm from './ChatForm';  // Importing the ChatForm component
import Mensaje from './Mensaje';  // Importing the Mensaje component for displaying messages
import { crearNuevaRespuesta } from '@/lib/actions.openai';  // Importing the function to interact with OpenAI API

const ChatBox = () => {
  // State for storing the chat history and loading status
  const [chatHistoria, setChatHistoria] = useState<MensajeProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle new user messages and get responses from OpenAI
  async function handleNewUserMessage(mensaje: MensajeProps) {
    setChatHistoria(chatHistoria => [...chatHistoria, mensaje]);  // Add the user message to chat history
    setIsLoading((prevState) => !prevState);  // Toggle loading state

    try {
      // OpenAI API interaction to get a response
      const response = await crearNuevaRespuesta(mensaje.content);
      
      // If a response is received, add it to the chat history
      if (response.content) {
        const chatMensaje = {
          role: 'assistant',  // Assistant's message
          content: response.content,  // Response content
        };

        // Add the assistant's response to the chat history
        setChatHistoria(chatHistoria => [...chatHistoria, chatMensaje]);
      }

    } catch (error) {
      console.log(error);  // Log any errors
    } finally {
      setIsLoading((prevState) => !prevState);  // End loading state
    }
  }

  return (
    <div className='flex flex-col flex-grow justify-end w-full pt-12 pb-2 rounded'>
      <div className='flex flex-col text-white'>
        {chatHistoria.map((mensaje, index) => (
          <Mensaje
            key={index}  // Unique key for each message
            mensaje={mensaje.content}  // Message content
            isAI={mensaje.role === 'user' ? false : true}  // Determine if the message is from the AI or user
          />
        ))}

        {/* Display a loading spinner while waiting for a response */}
        {isLoading && (
          <Mensaje 
            mensaje="" 
            isAI={true} 
            isLoading={true} 
          />
        )}
      </div>
      
      {/* ChatForm component to send new messages */}
      <ChatForm
        setChat={(mensaje) => handleNewUserMessage(mensaje)}  // Pass the function to handle new messages
      />
    </div>
  );
}

export default ChatBox;
