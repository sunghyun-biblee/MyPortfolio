import React, {
  MutableRefObject,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";

type ScrollRefType = MutableRefObject<HTMLDivElement[]>;

interface ItemType {
  element: RefObject<HTMLDivElement>;
  onMove: () => void;
  name: string;
}

interface IHeader {
  scrollRef: ScrollRefType;
  nav: ItemType[];
}

interface MenuBarProps {
  isScroll: boolean;
}

export const Header = ({ scrollRef, nav }: IHeader) => {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [navIndex, setNavIndex] = useState<number | null>(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // window의 인터페이스인 scrollY 속성은, 문서가 수직으로 몇 픽셀 만큼 스크롤 되었는지를 반환
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  const handleClick = (item: ItemType) => {
    item.onMove();
    setIsMenu(false);
  };
  return (
    <header
      className={`flex flex-col   transition-colors duration-500
        w-[100%]
    font-pretendard  
    backdrop-blur-[5px]
      ${isScroll ? "bg-[#AED1F5]/80 " : "bg-[#5ea3ec]/80"}
       
      `}
    >
      <div
        className="lg:max-w-[1400px] w-[100%]  mx-auto my-0   flex justify-between items-center mysm:min-h-[72px] lg:px-10 lg:py-5
        md:px-5
        mysm:px-3"
      >
        <span
          className={`text-2xl font-bold cursor-pointer ${
            isScroll
              ? "text-blue-950 hover:text-white"
              : "text-[#f2f2f2] hover:text-blue-950"
          }
        `}
          onClick={nav[0].onMove}
        >
          sungHyun's Portfolio
        </span>
        <ul
          className={` lg:text-xl md:text-lg mysm:text-sm 
            md:flex
            mysm:hidden 
            ${isScroll ? "text-blue-950" : "text-[#f2f2f2]"}
           `}
        >
          {nav &&
            nav.slice(1).map((item, index) => (
              <li
                className=" cursor-pointer lg:px-5 md:px-4 mysm:px-2"
                onClick={item.onMove}
                key={item.name + index}
              >
                <span
                  className={` border-b-2 pb-[1px] font-semibold transition-colors 
                    
                    ${
                      isScroll
                        ? "border-blue-950 hover:border-[#efefef] hover:text-[#efefef]"
                        : "border-[#f2f2f2] hover:border-blue-950 hover:text-blue-950"
                    }
            `}
                >
                  {item.name}
                </span>
              </li>
            ))}
        </ul>
        <div className="md:hidden mysm:flex justify-center items-center">
          <div
            className="w-[2rem] h-[2rem]"
            onClick={() => setIsMenu((prev) => !prev)}
          >
            <MenuBar isScroll={isScroll} />
          </div>
        </div>
      </div>

      <ul
        className={`overflow-hidden transition-mobileMenu box-border  duration-500 bg-transparent mysm:flex md:hidden flex-col md:px-5 mysm:px-3 w-[100%]   
      ${isMenu ? "h-[14.125rem] border-t-2" : "h-0 border-t-0 "}
      ${isScroll ? " border-blue-950/50" : "border-[#efefef]/50"} text-lg
      `}
      >
        {nav &&
          nav.slice(1).map((item, index) => (
            <li
              className={`text-left cursor-pointer py-3 ${
                isScroll
                  ? "text-blue-950 hover:text-white"
                  : "text-[#f2f2f2] hover:text-blue-950"
              } ${
                index === 0
                  ? "mt-[0.5rem]"
                  : index === nav.length - 2 && "mb-[0.5rem]"
              }
              `}
              onClick={() => handleClick(item)}
              key={item.name + index}
            >
              <span className={` font-semibold transition-colors `}>
                {item.name}
              </span>
            </li>
          ))}
      </ul>
    </header>
  );
};
const MenuBar = ({ isScroll }: MenuBarProps) => {
  return (
    <svg
      data-slot="icon"
      fill="none"
      strokeWidth="2"
      stroke={`${isScroll ? "#172554" : "#efefef"}`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      ></path>
    </svg>
  );
};
// {
//   /* <li
//             className=" cursor-pointer lg:px-5  mysm:px-3"
//             onClick={() => setNavIndex(0)}
//           >
//             <span
//               className={`mysm:text-sm lg:text-xl border-b-2 pb-[1px] font-semibold transition-colors ${
//                 isScroll
//                   ? "border-blue-950 hover:border-[#efefef] hover:text-[#efefef]"
//                   : "border-[#f2f2f2] hover:border-blue-950 hover:text-blue-950"
//               }
//               `}
//             >
//               About me
//             </span>
//           </li>
//           <li
//             className=" cursor-pointer lg:px-5  mysm:px-3"
//             onClick={() => setNavIndex(1)}
//           >
//             <span
//               className={`mysm:text-sm lg:text-xl border-b-2 pb-[1px] font-semibold transition-colors ${
//                 isScroll
//                   ? "border-blue-950 hover:border-[#efefef] hover:text-[#efefef]"
//                   : "border-[#f2f2f2] hover:border-blue-950 hover:text-blue-950"
//               }
//               `}
//             >
//               Skills
//             </span>
//           </li>
//           <li
//             className=" cursor-pointer lg:px-5  mysm:px-3"
//             onClick={() => setNavIndex(2)}
//           >
//             <span
//               className={`mysm:text-sm lg:text-xl border-b-2 pb-[1px] font-semibold  transition-colors ${
//                 isScroll
//                   ? "border-blue-950 hover:border-[#efefef] hover:text-[#efefef]"
//                   : "border-[#f2f2f2] hover:border-blue-950 hover:text-blue-950"
//               }
//               `}
//             >
//               Projects
//             </span>
//           </li> */
// }
