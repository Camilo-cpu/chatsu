import { BotIcon, Loader, User2Icon } from 'lucide-react';  // Import icons for bot and user
import React from 'react';
import { marked } from 'marked';  // Import marked library for parsing Markdown

// Type definition for message properties
type Props = {
  isAI: boolean;  // Indicates if the message is from AI (true) or user (false)
  mensaje: string;  // The message content
  isLoading?: boolean;  // Optional flag to show loading state (default is false)
};

/**
 * Component for displaying a message.
 * 
 * This component renders a message with different styles depending on whether it is from AI or the user.
 * It also supports rendering Markdown formatted messages if the message is from AI.
 * 
 * @component
 * @param {Props} props - The properties for the message, including `isAI` to distinguish between bot and user messages.
 * @returns {JSX.Element} The message element with an optional loading state.
 */
const Mensaje = ({
  isAI,
  mensaje,
  isLoading = false,  // Default isLoading value is false
}: Props) => {
  
  // Format the message using the marked library if it is from AI
  const formattedMensaje = isAI ? marked(mensaje) : mensaje;

  return (
    <div className={`flex w-full p-4 h-fit ${!isAI && 'flex-row-reverse'}`}>
      <div className={`flex min-h-16 gap-4 text-gray-200 ${!isAI && 'bg-slate-700 flex-row-reverse w-fit p-4 rounded-lg'}`}>
        {/* Display different icons based on message origin */}
        <div>
          {isAI ? <BotIcon /> : <User2Icon />}
        </div>

        {/* Display the message content */}
        <div className='w-full'>
          {isLoading 
            ? <Loader className='animate-spin' />  // Display loading spinner if isLoading is true
            : isAI 
                ? <div dangerouslySetInnerHTML={{ __html: formattedMensaje }} />  // Render formatted message for AI
                : <p>{mensaje}</p>  // Display plain message for the user
          }
        </div>
      </div>
    </div>
  );
};

export default Mensaje;  // Export the Mensaje component as default
