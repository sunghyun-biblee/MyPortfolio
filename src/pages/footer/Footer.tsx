import { ScrollMoveType } from "components/projects/Projects";
import React from "react";
import styled from "styled-components";

interface FooterProps {
  value: ScrollMoveType;
}
export const Footer = ({ value }: FooterProps) => {
  return (
    <footer
      className="  min-h-[100vh] w-[100%] flex justify-center items-center overflow-hidden bg-gradient-to-b to-[#7493BC] from-[#efefef] font-pretendard"
      ref={value.element}
    >
      <div
        className="max-w-[1400px] w-[100vw] px-3 flex flex-col items-center
      
      "
      >
        <h1 className="text-center lg:text-6xl md:text-6xl mysm:text-[40px] uppercase font-extrabold [text-shadow:_4px_2px_3px_#8098b2] py-5 mb-10 mt-[3.5rem]">
          Thank You!
        </h1>
        <FooterUl className="list-disc md:min-w-[500px] mysm:min-w-[400px] mx-[auto] my-0 text-2xl ">
          <FooterLi className="py-3 mysm:text-lg">
            <div>
              <h2 className="md:min-w-[75px] mysm:min-w-[45px]">Email</h2>:
              <span className="hover:text-blue-500 transition-all duration-300 ">
                sunghyun543@gmail.com
              </span>
              <span className="text-xs block mb-1">클릭시 복사</span>
            </div>
          </FooterLi>
          <FooterLi className="py-3 mysm:text-lg">
            <div>
              <h2 className="md:min-w-[75px] mysm:min-w-[45px]">Phone</h2>:
              <span className="hover:text-blue-500 transition-all duration-300">
                010-0000-0000
              </span>
            </div>
          </FooterLi>
          <FooterLi className="py-3 mysm:text-lg ">
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
          <FeedBackBtn
            className=" border-2 border-blue-900 hover:border-2 py-5 px-10  transition-all rounded-none hover:rounded-xl text-lg
          text-blue-900 font-semibold shadow-lg bg-transparent hover:bg-white/40"
          >
            피드백 보내기
          </FeedBackBtn>
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

const FeedBackBtn = styled.button``;
