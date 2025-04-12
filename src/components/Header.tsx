import Logo from "./Logo";
import HelpButton from "./HelpButton";

function Header() {
  return (
    <div className="w-full h-20 bg-white/80 p-5 rounded-b-3xl shadow-xl flex">
      <Logo />
      <div className="flex-grow flex justify-end">
        <HelpButton />
      </div>
    </div>
  );
}

export default Header;
