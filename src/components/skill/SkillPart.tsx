import { ScrollMoveType } from "components/projects/Projects";
import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import { SkillItem } from "./SkillItem";
import { SkillItemTwo } from "./SkillItemTwo";
import HtmlIcon from "assets/icons/Skill_Icons/HTML.svg";
import CssIcon from "assets/icons/Skill_Icons/CSS.svg";
import JsIcon from "assets/icons/Skill_Icons/JavaScript.svg";
import ReactIcon from "assets/icons/Skill_Icons/React-Light.svg";
import StyledIcon from "assets/icons/Skill_Icons/StyledComponents.svg";
import TsIcon from "assets/icons/Skill_Icons/TypeScript.svg";
import GitIcon from "assets/icons/Skill_Icons/Git.svg";
import TwIcon from "assets/icons/Skill_Icons/TailwindCSS-Dark.svg";
import VcIcon from "assets/icons/Skill_Icons/Vercel-Dark.svg";
import DiscordIcon from "assets/icons/Skill_Icons/Discord.svg";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  skillGridFirst,
  skillGridSecond,
  SkillViewToggle,
} from "recoil/portfolioAtoms";

const skillArray = [
  "React",
  "Javascript",
  "Typescript",
  "React-Query",
  "TailwindCSS",
];
interface ISkill {
  value: ScrollMoveType;
}
const SkillArray = [
  {
    title: "HTML",
    icon: HtmlIcon,
    text: [
      " 웹 표준을 지킬려고 노력합니다",
      " div 사용을 줄이며, 최대한 시멘틱태그를 활용하여 마크업 합니다",
    ],
  },
  {
    title: "CSS",
    icon: CssIcon,
    text: [
      "Keyfram을 활용한 애니메이션을 사용할 수 있습니다",
      "tailwindCSS를 사용하여 일관된 디자인 및 빠른속도로 스타일링이 가능합니다",
    ],
    PlusSkillIcon: TwIcon,
  },
  {
    title: "Javascript",
    icon: JsIcon,
    text: [
      "ES6 문법들을 이해하고 활용할 수 있습니다",
      "localStroage로 데이터를 관리할 수 있습니다 (자동로그인 구현, 영상 이어보기)",
    ],
  },
  {
    title: "React",
    icon: ReactIcon,
    text: [
      "React의 작동원리와 라이프사이클을 이해하고 있습니다.",
      "styled-components ,React-Query,React-router-Dom 활용할 수 있습니다",
      "테스트 관련 라이브러리의 필요성을 느끼고 학습중 입니다",
      "재사용 가능한 컴포넌트를 설계하기위해 노력합니다",
    ],
    PlusSkillIcon: StyledIcon,
  },
  {
    title: "Typescript",
    icon: TsIcon,
    text: [
      "기본 자료형과 인덱스 시그니처, unknown 타입에 대해 알고 있습니다.",
      "type, interface를 사용하여 타입을 분리할 수 있습니다.",
    ],
  },
  {
    title: "Git",
    icon: GitIcon,
    text: [
      "get,post,delete 요청을 하여 응답하는지 확인하고 디버깅할 수 있습니다",
    ],
  },
];
export const SkillPart = ({ value }: ISkill) => {
  const FirstGridTemplate = useRecoilValue(skillGridFirst);
  const SecondGridTemplate = useRecoilValue(skillGridSecond);
  const [viewToggle, setViewToggle] = useRecoilState(SkillViewToggle);

  return (
    <div
      className=" min-h-[100vh] w-[100%] flex justify-center
       bg-gradient-to-b to-[#D8F9DA] from-[#20DABF] pt-[5rem] font-pretendard
    "
      ref={value.element}
    >
      <div
        className="max-w-[1400px] min-h-[100vh] flex flex-col w-[100vw] lg:pt-[100px] mysm:pt-[50px]
      px-3"
      >
        <div className="pb-5 flex lg:justify-between lg:flex-row mysm:flex-col mysm:items-start lg:items-center">
          <h1
            className="text-left lg:text-6xl md:text-6xl mysm:text-[40px]  text-[#181f1b] font-extrabold
        [text-shadow:_5px_3px_3px_#3d9ca4]"
          >
            Skill Stack
          </h1>

          <div className="flex items-center gap-3">
            <span className="text-xl font-semibold ">전체보기</span>
            <ToggleBtn
              onClick={() => setViewToggle((prev) => !prev)}
              value={viewToggle}
            >
              <span></span>
            </ToggleBtn>
          </div>
        </div>

        <div className="flex justify-between items-center flex-col h-[60%]">
          <span className="text-center  font-medium text-gray-900 text-xl  ">
            아이콘에 마우스를 올리면 자세한 설명이 나옵니다.
          </span>
          <SkillContainerUl grid={FirstGridTemplate}>
            {SkillArray.slice(0, 3).map((item, index) => (
              <SkillItemTwo
                title={item.title}
                icon={item.icon}
                key={item.title + index}
                PlusSkillIcon={item.PlusSkillIcon}
                index={index}
                text={item.text}
              ></SkillItemTwo>
            ))}
          </SkillContainerUl>
          <SkillContainerUl grid={SecondGridTemplate}>
            {SkillArray.slice(3, 6).map((item, index) => (
              <SkillItemTwo
                title={item.title}
                icon={item.icon}
                key={index + item.text[0]}
                PlusSkillIcon={item.PlusSkillIcon}
                index={index + 3}
                text={item.text}
              ></SkillItemTwo>
            ))}
          </SkillContainerUl>
        </div>
        {/* <div
          className="lg:pb-[120px]
        mysm:pb-[100px]"
        >
           <ul
            className="md:flex md:flex-row 
        lg:px-2 md:px-1 mysm:grid mysm:grid-cols-3 md:gap-0 mysm:gap-3"
          >
            {skillArray.map((item, index) => (
              <Li
                className="px-3 py-[5px] shadow-lg  lg:mr-5 md:mr-2 lg:text-[22px]"
                key={item + index}
              >
                <span>{item}</span>
              </Li>
            ))}
            <Li className="px-3 py-[5px] shadow-lg lg:text-[22px] md:text-base ">
              <span className="mysm:hidden md:block">styled-components</span>
              <span className="mysm:block md:hidden">styled</span>
            </Li>
          </ul> *
        </div> */}
        {/* <section
          className="md:grid md:grid-cols-2 md:gap-y-20 md:gap-x-10 mysm:flex mysm:flex-col gap-16
        mysm:px-4
        "
        >
          {SkillArray.map((item, index) => (
            <SkillItem item={item} key={item.title + index}></SkillItem>
          ))}
        </section> */}
      </div>
    </div>
  );
};

const ToggleBtn = styled.button<{ value: boolean }>`
  width: 70px;
  height: 35px;
  background-color: ${(props) =>
    props.value ? " rgb(59, 130, 246)" : "#efefef"};
  display: flex;
  align-items: center;
  transition: all 0.5s ease;
  border-radius: 30px;

  span {
    display: block;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    margin: 0px 5px;
    background-color: ${(props) =>
      props.value ? "#efefef" : "rgb(59, 130, 246)"};
    transform: ${(props) =>
      props.value ? "translateX(140%)" : "translateX(0)"};

    transition: all 0.5s ease;
  }
`;
const SkillContainerUl = styled.ul<{ grid: string }>`
  width: 100%;
  display: grid;

  grid-template-columns: ${(props) => props.grid};
  transition: all 500ms;
  overflow: hidden;
  gap: 15px;
  margin-bottom: 20px;
`;
