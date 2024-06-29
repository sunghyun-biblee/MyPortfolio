import React, { useState } from "react";

import preview2 from "assets/img/A1.jpg";
import { ScrollMoveType } from "components/projects/Projects";
import styled from "styled-components";
import { useTextFadeIn } from "hooks/useTextFadeIn";
import { AboutMeModal } from "./AboutMeModal";

interface IAboutMe {
  value: ScrollMoveType;
}
interface BackGroundProps {
  img: string;
}
export const AboutMe = ({ value }: IAboutMe) => {
  const TitleAnimate = useTextFadeIn(1, 0, "down");
  const TextAnimate = useTextFadeIn(1, 0.4);
  const [isDescript, setIsDescript] = useState<boolean>(false);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

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
     lg:items-stretch mysm:items-center bg-transparent/20
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
          className="flex flex-col md:text-lg mysm:text-base z-10  text-[#efefef] 
          max-w-[650px] lg:mt-[10rem] mysm:mt-[6rem]
         lg:ml-[auto]   mysm:ml-[0px]  mysm:mr-[0px] lg:mr-[5rem] 
          transition-all duration-[1000ms]
          transfrom lg:-translate-y-[100px] mysm:-translate-y-[0px]
           lg:px-0 lg:py-0 mysm:px-3 
           font-pretendard 
           font-medium 
           
          md:tracking-wide
          mysm:tracking-normal
            
        "
          {...TextAnimate}
        >
          {/* <span className="cursor-pointer ">renderSkill Animation</span> */}
          <div>
            <h1 className="md:text-[1.7rem] mysm:text-xl font-semibold ">
              꾸준히 우상향할 프론트엔드 개발자 조성현 입니다
            </h1>

            <div className=" md:block mysm:flex flex-col mt-[1rem] md:mb-[0.5rem] mysm:mb-[1rem]">
              <span className="lg:text-[black] mysm:text-[#ee4949]  font-extrabold text-xl tracking-wide transition-colors duration-700">
                ' 중요한건 꺽이지 않는 마음 '
              </span>
              <span className="text-sm md:pl-3 mysm:pl-1 pt-2 tracking-wider lg:text-inherit mysm:text-gray-300">
                이라는 신조를 항상 마음에 새기고 있습니다
              </span>
            </div>
            <p className="leading-[1.9rem] py-1">
              개발자로 성장하는 과정에서 처음 마주하는 기술들에 시간이
              걸리더라도 외우려 하지 않고 최대한 이해하여 사용하는 것을 선호
              합니다.
              <br />
              프로젝트 진행 중 발생하는 문제에 대해서는 회피하지 않고 팀원들과
              소통하여 해결하며, 일정과 리소스를 고려하여 우선순위를 유연하게
              조정한 뒤, 팀원들의 공감을 바탕으로 프로젝트를 끝까지 마무리합니다
            </p>
            <p>
              이런 경험을 바탕으로 배움에 대한 열정을 잃지 않고 꾸준한 노력을
              기반으로 <br />
              멀티캠퍼스 수료과정에서{" "}
              <BestSpan
                className="text-yellow-300 hover:cursor-pointer"
                onClick={() => setIsModal(true)}
              >
                개인 최우수상
              </BestSpan>
              을 수상했습니다
            </p>
          </div>
          <div className="pt-[2rem] text-base relative">
            P.S 인터랙티브한 웹과
            <JaKobSpan onClick={() => setIsDescript((prev) => !prev)}>
              제이콥의 법칙
            </JaKobSpan>
            을 활용하여 UI/UX 디자인을 구현하는걸 좋아합니다
            <div
              className={`absolute  -left-[0%] transition-width duration-1000 overflow-hidden  text-[#BEFBFF] break
                md:-bottom-[50%]
                mysm:-bottom-[65%]
                max-w-[600px] 
                md:min-h-[24px] 
                md:max-h-[24px]
                mysm:min-h-[24px] 
                mysm:max-h-[48px]
              ${isDescript ? "w-[100%] " : "w-[0px] "}`}
            >
              사용자는 익숙해진 기존의 경험을 바탕으로 기대치를 형성하는 경향을
              보인다는 내용의 법칙
            </div>
          </div>
        </div>
        <AboutMeModal
          isModal={isModal}
          setIsModal={setIsModal}
          page={page}
          setPage={setPage}
        ></AboutMeModal>
      </div>
    </div>
  );
};
const BestSpan = styled.span`
  &::after {
    content: "📋";
  }
`;

const JaKobSpan = styled.span`
  padding-bottom: 1px;
  margin: 0px 5px;
  cursor: pointer;
  color: #befbff;
  transition: all 0.3s;
  border-bottom: 1px solid #befbff;
`;
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
