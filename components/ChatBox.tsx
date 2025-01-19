'use client';
import React, { useState } from 'react'
import ChatForm from './ChatForm'
import Mensaje from './Mensaje'
import { crearNuevaRespuesta } from '@/lib/actions.openai';

const ChatBox = () => {

    const [chatHistoria, setChatHistoria] = useState<MensajeProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    async function handleNewUserMessage(mensaje: MensajeProps) {
        setChatHistoria(chatHistoria => [...chatHistoria, mensaje]);
        setIsLoading((prevState) => !prevState);

        try {
            //OPENAI API
            const response = await crearNuevaRespuesta(mensaje.content)
            if (response.content) {
                const chatMensaje = {
                    role: 'assistant',
                    content:  response.content,
                }

                setChatHistoria(chatHistoria => [...chatHistoria, chatMensaje]);
            }

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading((prevState)=> !prevState)
        }
        
    }

    return (
        <div className='flex flex-col flex-grow justify-end w-full pt-12 pb-2 rounded'>
            <div className='flex flex-col text-white'>
            {chatHistoria.map((mensaje, index) => (   
                <Mensaje
                    key={index}
                    mensaje={mensaje.content}
                    isAI={mensaje.role === 'user' ? false: true}
                 />
            ))}

            {isLoading && (
                <Mensaje 
                mensaje=""
                isAI={true}
                isLoading={true}
                /> 
            )}
            
            </div>
            <ChatForm
                 setChat={(mensaje) => handleNewUserMessage(mensaje)}
            />

        </div>
    )
}

export default ChatBox