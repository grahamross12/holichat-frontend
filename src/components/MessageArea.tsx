import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";
import { Message } from "../types";
import { FaArrowLeft } from "react-icons/fa6";

type MessageAreaProps = {
  messages: Message[];
  onClickBack: () => void;
};

function MessageArea({ messages, onClickBack }: MessageAreaProps) {
  return (
    <div className="w-full flex-grow flex flex-col gap-4 justify-start items-start">
      <div className="flex items-center gap-4">
        <button
          onClick={onClickBack}
          className="bg-cyan-800 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
        >
          <FaArrowLeft />
        </button>
      </div>

      {messages.map((message, index) => {
        if (message.sender === "user") {
          return <UserMessage message={message.text} key={index} />;
        } else {
          return <BotMessage message={message.text} key={index} />;
        }
      })}
    </div>
  );
}

export default MessageArea;
