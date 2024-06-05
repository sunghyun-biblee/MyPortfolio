import React, { useEffect, useState } from "react";

export const Header = () => {
  const [isShow, setShow] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // window의 인터페이스인 scrollY 속성은, 문서가 수직으로 몇 픽셀 만큼 스크롤 되었는지를 반환한다.
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);
  return (
    <header
      className={`flex justify-center lg:py-5 transition-colors lg:px-10 mysm:px-3 h-[72px] mx-auto my-0 w-[100%]
      ${isShow ? "bg-[#AED1F5]" : "bg-[#5ea3ec]/50"}
      `}
    >
      <div className="lg:max-w-[1200px] w-[100%]  flex justify-between items-center">
        <h1
          className={`text-2xl font-semibold  transition-colors cursor-pointer ${
            isShow
              ? "text-blue-950 hover:text-white"
              : "text-[#f2f2f2] hover:text-blue-950"
          }
        `}
        >
          biblee Portfolio
        </h1>
        <ul
          className={`flex text-xl ${
            isShow ? "text-blue-950" : "text-[#f2f2f2]"
          }`}
        >
          <li className=" cursor-pointer lg:px-5  mysm:px-3">
            <span
              className={`mysm:text-sm lg:text-xl border-b-2 pb-[1px] font-semibold transition-colors ${
                isShow
                  ? "border-blue-950 hover:border-[#efefef] hover:text-[#efefef]"
                  : "border-[#f2f2f2] hover:border-blue-950 hover:text-blue-950"
              }
              `}
            >
              About me
            </span>
          </li>
          <li className=" cursor-pointer lg:px-5  mysm:px-3">
            <span
              className={`mysm:text-sm lg:text-xl border-b-2 pb-[1px] font-semibold transition-colors ${
                isShow
                  ? "border-blue-950 hover:border-[#efefef] hover:text-[#efefef]"
                  : "border-[#f2f2f2] hover:border-blue-950 hover:text-blue-950"
              }
              `}
            >
              Skills
            </span>
          </li>
          <li className=" cursor-pointer lg:px-5  mysm:px-3">
            <span
              className={`mysm:text-sm lg:text-xl border-b-2 pb-[1px] font-semibold  transition-colors ${
                isShow
                  ? "border-blue-950 hover:border-[#efefef] hover:text-[#efefef]"
                  : "border-[#f2f2f2] hover:border-blue-950 hover:text-blue-950"
              }
              `}
            >
              Projects
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
};
