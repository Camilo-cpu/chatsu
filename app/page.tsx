import ChatBox from "@/components/ChatBox";  // Importing the ChatBox component from the specified path
import Image from "next/image";  // Importing the Image component from Next.js for optimized image handling

/**
 * The Home function is a React component that serves as the main page of the application.
 * It returns a layout structure containing a ChatBox component centered on the screen.
 *
 * @returns {JSX.Element} A flexbox container that centers the ChatBox component on the page with a dark background.
 */
export default function Home() {
  return (
    <div className="flex items-center justify-center w-full min-h-[100vh] bg-slate-900">
      {/* Main container styled to center content both vertically and horizontally */}
      <ChatBox /> {/* Rendering the ChatBox component */}
    </div>
  );
}
