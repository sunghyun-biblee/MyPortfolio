import React, { useEffect, useState } from "react";
import preview from "assets/img/profileImg.jpg";
export const Introduce = () => {
  const [typingText, setTypingText] = useState<string>("");
  const [typingIndex, setTypingIndex] = useState<number>(0);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const text = `FrontEnd Developer 조성현의 포트폴리오입니다`;
  useEffect(() => {
    const handleTyping = () => {
      if (!isComplete) {
        if (typingIndex < text.length) {
          setTypingText((prev) => prev + text[typingIndex]);
          setTypingIndex((prev) => prev + 1);
        } else {
          setIsComplete(true);
        }
      } else {
        if (typingIndex > 0) {
          setTypingText((prev) => prev.slice(0, -1));
          setTypingIndex((prev) => prev - 1);
        } else {
          setIsComplete(false);
        }
      }
    };
    const typingInterval = setInterval(handleTyping, 150);
    return () => clearInterval(typingInterval);
  });
  return (
    <div
      className={`h-[calc(100dvh-82px)] flex justify-center items-center w-[100%]`}
    >
      {/* <h1 className="lg:text-6xl md:text-3xl ">{typingText}</h1> */}
      <div className="flex items-center">
        <div>
          <p className="lg:text-6xl font-mono">Frontend Developer</p>
          <p className="lg:text-5xl pt-5 font-mono">sungHyun</p>
        </div>
        <div className="overflow-hidden rounded-[50%] shadow-xl border-[1px] w-[200px] h-[200px] ml-[100px]">
          <img src={preview} alt="myprofileImg" className="object-cover" />
        </div>
      </div>
    </div>
  );
};
