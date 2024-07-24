import { ScrollMoveType } from "components/projects/Projects";
import { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

interface FooterProps {
  value: ScrollMoveType;
}
export const Contact = ({ value }: FooterProps) => {
  const ContactRef = useRef<HTMLDivElement>(null);

  const onFadeIn = useCallback(([entry]: IntersectionObserverEntry[]) => {
    const { current } = ContactRef;
    if (current && entry.isIntersecting) {
      current.style.transitionProperty = "all";
      current.style.transitionDuration = `0.5s`;
      current.style.scale = "1";
      current.style.opacity = "1";
    } else if (current) {
      current.style.opacity = "0";
      current.style.scale = "0";
    }
  }, []);
  useEffect(() => {
    let observer: IntersectionObserver | undefined;

    if (ContactRef.current) {
      observer = new IntersectionObserver(onFadeIn, { threshold: 0.7 });
      observer.observe(ContactRef.current);
    }

    return () => observer && observer.disconnect();
  }, [onFadeIn]);

  const handleCopy = (mail: string) => {
    try {
      navigator.clipboard.writeText(mail);
      alert("클릭보드에 복사되었습니다");
    } catch (error) {
      alert("복사에 실패하였습니다");
    }
  };

  return (
    <footer
      className="  min-h-[100vh] w-[100%] flex justify-center items-center overflow-hidden bg-gradient-to-b to-[#7493BC] from-[#efefef] font-pretendard"
      ref={value.element}
    >
      <div
        className="max-w-[1400px] w-[100vw] px-3 flex flex-col items-center
      "
        ref={ContactRef}
        style={{ opacity: 0 }}
      >
        <h1 className="text-center lg:text-7xl md:text-6xl mysm:text-[40px] uppercase font-extrabold [text-shadow:_4px_2px_3px_#8098b2] py-5 mb-10 mt-[3.5rem] font-pretendard">
          감사합니다
        </h1>
        <FooterUl className="list-disc md:min-w-[500px] mysm:min-w-[400px] mx-[auto] my-0  lg:text-2xl mysm:text-lg">
          <FooterLi
            className="py-3 "
            onClick={() => handleCopy("sunghyun543@gmail.com")}
          >
            <div>
              <h2 className="md:min-w-[75px] mysm:min-w-[45px]">Email</h2>:
              <span className="hover:text-blue-500 transition-all duration-300 ">
                sunghyun543@gmail.com
              </span>
              <span className="text-xs block mb-1">클릭시 복사</span>
            </div>
          </FooterLi>
          <FooterLi className="py-3">
            <div>
              <h2 className="md:min-w-[75px] mysm:min-w-[45px]">Phone</h2>:
              <span className="hover:text-blue-500 transition-all duration-300">
                010-5097-3758
              </span>
            </div>
          </FooterLi>
          <FooterLi className="py-3 ">
            <div>
              <h2 className="md:min-w-[75px] mysm:min-w-[45px]">github</h2>:
              <a
                href="https://github.com/sunghyun-biblee"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-all duration-300"
              >
                github.com/sunghyun-biblee
              </a>
            </div>
          </FooterLi>
        </FooterUl>
        <div className="mt-10 mb-5">
          <a
            href="https://forms.gle/kF1aDYxNdzUGmNqHA"
            target="_blank"
            rel="noreferrer"
            className=" border-2 border-blue-900 hover:border-2 py-5 px-10  transition-all rounded-none hover:rounded-xl text-lg
          text-blue-900 font-semibold shadow-lg bg-transparent hover:bg-white/40"
          >
            피드백 보내기
          </a>
        </div>
      </div>
    </footer>
  );
};

const FooterLi = styled.li`
  h2 {
    text-align: left;
  }
  div {
    display: flex;
    align-items: end;
    white-space: pre-wrap;
  }
  span,
  a {
    cursor: pointer;
    margin-left: 10px;
    &:hover {
      text-shadow: 2px 1px 40px #5ea3ec;
    }
  }
  &::marker {
    color: #5ea3ec;
  }
`;
const FooterUl = styled.ul`
  padding: 0.5rem 1.1rem;
  word-break: keep-all;
`;
