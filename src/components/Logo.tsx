import { useState, useEffect } from "react";

function Logo() {
  const [text, setText] = useState("█");

  const startAnimation = async () => {
    const textArray = "HOLICHAT".split("");
    let index = 0;
    let text_ = "";
    const interval = setInterval(() => {
      if (index < textArray.length) {
        text_ += textArray[index];
        setText(text_ + "█");
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  };

  useEffect(() => {
    // wait before starting the animation
    setTimeout(() => {
      startAnimation();
    }, 500);
  }, []);

  return (
    <div className="w-60">
      <h1 className="text-4xl text-cyan-800 tracking-widest cursor-default font-bold">
        {text}
      </h1>
    </div>
  );
}

export default Logo;
