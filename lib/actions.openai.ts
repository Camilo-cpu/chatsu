'use server';  // Indicates this code runs on the server side in a Next.js app

import OpenAI from "openai";  // Import the OpenAI SDK
const openai = new OpenAI();  // Initialize OpenAI SDK instance

/**
 * Creates a new response from the OpenAI API using the provided user message.
 * 
 * This function sends a request to the OpenAI API to generate a response based on the user's message,
 * with a predefined system prompt that guides the assistant's behavior. The response from the API is then returned.
 * 
 * @param {string} mensaje - The user message to send to the OpenAI API.
 * @returns {Promise<{role: string, content: string}>} - A promise that resolves to the assistant's message.
 */
export async function crearNuevaRespuesta(mensaje: string) {
  // Send request to OpenAI API to get a completion response based on the user message
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",  // Specify the model to use
    messages: [
      {
        role: "system",  // System message to set the behavior of the assistant
        content: "Eres un chatbot de asistencia al usuario, tu función es hacer sentir al usuario especial y siempre darle la mejor solución",
      },
      {
        role: "user",  // User's message
        content: mensaje,
      },
    ],
  });

  // Log the assistant's response (for debugging or logging purposes)
  console.log(completion.choices[0].message);

  // Return the assistant's message
  return completion.choices[0].message;
}
