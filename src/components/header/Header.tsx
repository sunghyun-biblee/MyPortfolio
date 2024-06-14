import React, {
  MutableRefObject,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";

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

export const Header = ({ scrollRef, nav }: IHeader) => {
  const [isShow, setShow] = useState<boolean>(false);
  const [navIndex, setNavIndex] = useState<number | null>(null);
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
  // useEffect(() => {
  //   if (navIndex !== null) {
  //     scrollRef.current[navIndex]?.scrollIntoView({
  //       block: "start",
  //       behavior: "smooth",
  //     });
  //     setNavIndex(null);
  //   }
  // }, [scrollRef, navIndex]);

  return (
    <header
      className={`flex justify-center lg:py-5 transition-colors
        lg:px-10
        md:px-5
        mysm:px-3 h-[72px] mx-auto my-0 w-[100%]
       
      ${isShow ? "bg-[#AED1F5]" : "bg-[#5ea3ec]"}
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
          onClick={nav[0].onMove}
        >
          biblee Portfolio
        </h1>
        <ul
          className={`flex lg:text-xl md:text-lg mysm:text-base ${
            isShow ? "text-blue-950" : "text-[#f2f2f2]"
          }`}
        >
          {nav &&
            nav.slice(1).map((item) => (
              <li
                className=" cursor-pointer lg:px-5  mysm:px-3"
                onClick={item.onMove}
              >
                <span
                  className={` border-b-2 pb-[1px] font-semibold transition-colors ${
                    isShow
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
      </div>
    </header>
  );
};
{
  /* <li
            className=" cursor-pointer lg:px-5  mysm:px-3"
            onClick={() => setNavIndex(0)}
          >
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
          <li
            className=" cursor-pointer lg:px-5  mysm:px-3"
            onClick={() => setNavIndex(1)}
          >
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
          <li
            className=" cursor-pointer lg:px-5  mysm:px-3"
            onClick={() => setNavIndex(2)}
          >
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
          </li> */
}
