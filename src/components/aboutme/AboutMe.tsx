import React from "react";

import preview2 from "assets/img/A1.jpg";
import { ScrollMoveType } from "components/projects/Projects";
import styled from "styled-components";
import { useTextFadeIn } from "hooks/useTextFadeIn";

interface IAboutMe {
  value: ScrollMoveType;
}
interface BackGroundProps {
  img: string;
}
export const AboutMe = ({ value }: IAboutMe) => {
  const TitleAnimate = useTextFadeIn(1, 0, "down");
  const TextAnimate = useTextFadeIn(1, 0.4);

  return (
    <div
      className="h-[100vh] w-[100%] flex justify-center items-center
        bg-gradient-to-b from-cyan-500 to-[#20DABF] 
      pt-[82px] 
      "
      ref={value.element}
    >
      <div
        className="lg:w-[100%] mysm:w-[100vw] lg:max-w-[1400px]  lg:min-h-[100vh] mysm:min-h-[100vh] mx-auto my-0 relative flex flex-col justify-center text-left   box-border  mysm:p-0
     lg:items-stretch mysm:items-center bg-transparent/10
      "
      >
        <BackGroundImg
          img={preview2}
          className="lg:w-[600px] transition-all duration-1000 lg:brightness-90  mysm:brightness-50"
        />

        <div
          className="z-10  lg:ml-[10%]  mysm:ml-[0px] 
         transition-all duration-1000 "
          {...TitleAnimate}
        >
          <h1 className=" inline text-5xl text-white uppercase font-extrabold ">
            like a turtle
          </h1>
        </div>
        <div
          className="flex flex-col md:text-lg mysm:text-sm z-10  text-white  font-medium max-w-[730px] lg:mt-[10rem] mysm:mt-[6rem]
         lg:ml-[auto]   mysm:ml-[0px]  mysm:mr-[0px] lg:mr-[3rem] 
          transition-all duration-[1000ms]
          transfrom lg:-translate-y-[100px] mysm:-translate-y-[0px]
           lg:px-3 lg:py-3 mysm:px-3 
             
        "
          {...TextAnimate}
        >
          {/* <span className="cursor-pointer ">renderSkill Animation</span> */}
          <div>
            <h3 className="md:text-xl mysm:text-[17px] font-semibold leading-10">
              꾸준히 우상향할 프론트엔드 개발자 조성현 입니다
            </h3>

            <div className="py-2 md:block mysm:flex flex-col my-2">
              <span className="lg:text-[black] mysm:text-[#ee4949]  font-extrabold text-xl tracking-wide transition-colors duration-700">
                "중요한건 꺽이지 않는 마음"
              </span>
              <span className="text-sm pl-3 pt-2">
                이 문장은 항상 마음에 두고있는 문장입니다
              </span>
            </div>
            <p className="leading-8 tracking-normal">
              개발자를 준비하면서 처음마주하는 기술들은 시간이 다소 걸리더라도
              외울려하지않고, 최대한 이해하여 사용하려는 편이며
              <br />
              프로젝트를 진행하며 생기는 트러블<b>(이슈)</b>을 마주쳐도
              회피하지않고, 팀원들과의 소통으로 일정 및 리소스등을 고려하여 어떤
              것이 우선순위인지 유연하게 판단하며, 팀원들의 공감을 바탕으로
              프로젝트를 끝까지 마무리 합니다.
            </p>
          </div>
          <span className="py-4">
            인터랙티브한 웹과 제이콥의 법칙을 활용하여 UI/UX 디자인을
            구현하는것을 좋아합니다
          </span>
        </div>
      </div>

      {/* <ul className="flex flex-col items-end px-6 ml-[70px]">
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
          </ul> */}
    </div>
  );
};

const BackGroundImg = styled.div<BackGroundProps>`
  position: absolute;
  height: 100%;
  min-height: 600px;

  background: ${(props) => `url(${props.img})  no-repeat`};

  background-attachment: fixed;
  /* filter: brightness(50%); */
  z-index: 0;
  /* background-repeat: no-repeat;
  background-size: 450px 100%;
 
   */
  @media screen and (min-width: 1024px) {
    background-size: 1100px auto;
    background-position: 23% 90%;
  }
  @media screen and (min-width: 375px) and (max-width: 1023px) {
    width: 100%;
    background-size: 1010px auto;

    background-position: 10% 100%;
  }
`;
