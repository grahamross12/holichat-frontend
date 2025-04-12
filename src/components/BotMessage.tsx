interface BotMessageProps {
  message: string;
}

function BotMessage({ message }: BotMessageProps) {
  return (
    <div className="w-full flex justify-start">
      <div className="max-w-100 min-h-10 bg-zinc-50 p-5 rounded-lg rounded-bl-none">
        {message}
      </div>
    </div>
  );
}

export default BotMessage;
