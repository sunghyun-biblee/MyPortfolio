import React from "react";
import preview from "assets/img/profileImg.jpg";
export const AboutMe = () => {
  return (
    <div className="flex flex-col justify-center items-center border-[1px] rounded-2xl h-[50dvh] w-[90%] bg-[#efefee] my-1 hover:border-indigo-300 ">
      <span
        onClick={() => {
          window.location.href =
            "https://devproject.store/oauth2/authorization/google";
        }}
      >
        renderSkill Animation
      </span>
      <div className="flex py-[80px] items-start">
        <div className="overflow-hidden rounded-[50%] shadow-xl border-[1px] w-[200px] h-[200px]">
          <img src={preview} alt="myprofile" className="object-cover" />
        </div>
        <ul className="flex flex-col items-end px-6 ml-[70px]">
          <li
            className="border-[1px] rounded-3xl w-[100%] text-left px-5 py-3
          hover:bg-[#393E46] hover:text-[#efefef] hover:border-red  font-semibold font-sans border-black hover:border-gray-50 "
          >
            <span> sunghyun543@gmail.com</span>
          </li>
          <li
            className="border-[1px] rounded-3xl w-[100%] mt-3 text-left px-5 py-3
          hover:bg-[#393E46] hover:text-[#efefef] hover:border-red  font-semibold font-sans border-black hover:border-gray-50 "
          >
            <span> github</span>
          </li>
          <li
            className="border-[1px] rounded-3xl w-[100%] mt-3 text-left px-5 py-3
          hover:bg-[#393E46] hover:text-[#efefef] hover:border-red  font-semibold font-sans border-black hover:border-gray-50 "
          >
            <span> blog</span>
          </li>
          <li
            className="border-[1px] rounded-3xl w-[100%] mt-3 text-left px-5 py-3
          hover:bg-[#393E46] hover:text-[#efefef] hover:border-red  font-semibold font-sans border-black hover:border-gray-50 "
          >
            <span> KAKAO</span>
          </li>
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