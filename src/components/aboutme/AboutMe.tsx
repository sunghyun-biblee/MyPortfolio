import React from "react";
import preview from "assets/img/preview.jpg";
export const AboutMe = () => {
  return (
    <div className="flex flex-col justify-between items-center border-[1px] rounded-2xl h-[50dvh]">
      <span>renderSkill Animation</span>
      <div className="flex">
        <img src={preview} alt="myprofile" />
        <ul>
          <li>sunghyun543@gmail.com</li>
          <li>github</li>
          <li>blog</li>
          <li>KAKAO</li>
        </ul>
      </div>
      <div className="flex">
        <p>overview</p>
        <details>
          <summary>요약내용</summary>
          헤헤
        </details>
      </div>
    </div>
  );
};
