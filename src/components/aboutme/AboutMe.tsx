import React, { useState } from "react";

import preview2 from "assets/img/profile/A1.webp";
import { ScrollMoveType } from "components/projects/Projects";
import styled from "styled-components";
import { useTextFadeIn } from "hooks/useTextFadeIn";
import { AboutMeModal } from "./AboutMeModal";

interface IAboutMe {
  value: ScrollMoveType;
}
interface BackGroundProps {
  value: string;
}
export const AboutMe = ({ value }: IAboutMe) => {
  const TitleAnimate = useTextFadeIn(1, 0, "down");
  const TextAnimate = useTextFadeIn(1, 0.4);
  const [isDescript, setIsDescript] = useState<boolean>(false);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);

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
          value={preview2}
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
            <h1 className="md:text-3xl mysm:text-xl font-semibold mb-5 ">
              꾸준히 우상향할{" "}
              <span
                className="transition-all duration-500 lg:text-gray-800 mysm:text-gray-200 font-bold
              lg:border-b-0 mysm:border-b-2
              "
              >
                프론트엔드 개발자 조성현
              </span>{" "}
              입니다
            </h1>

            {/* <div className=" md:block mysm:flex flex-col mt-[1rem] md:mb-[0.5rem] mysm:mb-[1rem]">
              <span className="lg:text-[black] mysm:text-[#ee4949]  font-extrabold text-xl tracking-wide transition-colors duration-700">
                ' 중요한건 꺽이지 않는 마음 '
              </span>
              <span className="text-sm md:pl-3 mysm:pl-1 pt-2 tracking-wider lg:text-inherit mysm:text-gray-300">
                이라는 신조를 항상 마음에 새기고 있습니다
              </span>
            </div> */}
            <div className="transition-all lg:text-lg mysm:text-base leading-[1.9rem] break-keep">
              <p>
                개발자로 성장하는 과정에서 React 와 같은 프론트엔드 프레임워크를
                학습할 때, 단순한 암기보다는 컴포넌트 라이프사이클, 상태 관리와
                같은 핵심 개념을 이해하고 응용하는 것을 중요시합니다
              </p>
              <p className="py-2">
                프로젝트 진행 중 발생하는 버그 및 이슈를 식별하고, 디버깅 과정을
                통해 백엔드 이슈로 확인된 경우, 원인 분석과 결과 보고를 명확히
                전달한 후, 팀원들과 적극적으로 소통하여 문제해결에 도움이 될 수
                있도록 기여합니다
              </p>
              <p>
                이런 경험을 바탕으로 배움에 대한 열정을 잃지 않고 꾸준한 노력을
                기반으로 <br />
                멀티캠퍼스 수료과정에서
                <BestSpan
                  className="text-yellow-300 hover:cursor-pointer px-1"
                  onClick={() => setIsModal(true)}
                >
                  개인 최우수상
                </BestSpan>
                을 수상했습니다
              </p>
            </div>
          </div>
          <p className="pt-[2rem] md:pb-0 mysm:pb-[0.1rem] text-base relative break-keep">
            사용자들의 시선을 집중시키고, 매력적인 인상을 남기기 위해
            애니메이션과 트랜지션을 <br /> 활용한 웹 디자인을 좋아합니다
          </p>
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

  background: ${(props) => `url(${props.value})  no-repeat`};

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
