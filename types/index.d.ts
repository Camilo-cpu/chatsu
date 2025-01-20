/**
 * Represents the structure of a message in a chat system.
 * 
 * @typedef {Object} MensajeProps
 * @property {string} role - The role of the message sender (e.g., 'user' or 'assistant').
 * @property {string} content - The content of the message.
 */
declare type MensajeProps = {
    role: string;  // Specifies the role of the sender
    content: string;  // Contains the message text
  };
  