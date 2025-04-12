interface UserMessageProps {
  message: string;
}

function UserMessage({ message }: UserMessageProps) {
  return (
    <div className="w-full flex justify-end">
      <div className="max-w-100 min-h-10 bg-zinc-200 p-5 rounded-lg rounded-br-none">
        {message}
      </div>
    </div>
  );
}

export default UserMessage;
