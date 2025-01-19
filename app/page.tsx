import ChatBox from "@/components/ChatBox";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full min-h-[100vh] bg-slate-900">
      <ChatBox />
    </div>
  );
}
