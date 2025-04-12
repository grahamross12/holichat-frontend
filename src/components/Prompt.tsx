import { FiSend } from "react-icons/fi";

type PromptProps = {
  onSubmit: (event: React.FormEvent) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
};

function Prompt({ onSubmit, inputRef }: PromptProps) {
  return (
    <div className="hover:outline-black outline-zinc-400 rounded-full w-full h-10 bg-white flex justify-end items-center pl-5 pr-2 c-grey shadow-xl">
      <form className="flex w-full h-full" onSubmit={onSubmit}>
        <input
          className="flex-grow flex m-0 outline-none"
          placeholder="Describe your ideal holiday location..."
          ref={inputRef}
        ></input>
        <button className="flex justify-center items-center w-10 h-10 p-0 cursor-pointer">
          <FiSend strokeWidth={1} size={25} />
        </button>
      </form>
    </div>
  );
}

export default Prompt;
