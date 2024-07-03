import React, { RefObject, forwardRef, useState } from "react";
import { ProjectsItem } from "./ProjectsItem";
import { TripFixedProejct } from "./TripFixedProejct";
import { ProjectItemTwo } from "./ProjectItemTwo";
import ClassHub from "assets/img/ClassHub/Mainpage2.jpg";
import TripFixied from "assets/img/TripFixied/mainpage2.jpg";
import MyPortfolio from "assets/img/MyPortfolio/mainpage2.jpg";
import styled from "styled-components";
export interface ScrollMoveType {
  element: RefObject<HTMLDivElement>;
  onMove: () => void;
  name: string;
}
interface Itest {
  value: ScrollMoveType;
}

export type projectItemType = {
  projectImg: string;
  title: string;
  skills: string[];
  deploy: string | null;
  function: string[];
  github: string;
  category: string | null;
  description: string;
  date: string;
};
const projectArray = [
  {
    date: "2024.03~2024.05",
    projectImg: TripFixied,
    category: "개인 프로젝트",
    title: "trip fixed",
    skills: ["Javascript", "React", "styled-components", "firebase"],
    deploy: null,
    function: [
      "여행일자의 날씨정보 제공",
      "선택지역의 관광지 추천 및 정보 제공",
      "선택지역의 축제정보 제공",
      "선택지역의 숙소 정보 제공",
    ],
    github: "github.com/sunghyun-biblee/Trip_Fixied_Project",
    description:
      "여행계획을 세우기 힘든 사람들을 위해 공공데이터 기반으로 여행지를 추천해주는 서비스 입니다.",
  },
  {
    date: "2024.03~2024.05",
    projectImg: ClassHub,
    category: "팀 프로젝트",
    title: "Class Hub",
    skills: [
      "Typescript",
      "React",
      "styled-components",
      "tailwindCSS",
      "React-Query",
    ],
    deploy: "https://devproject.store",
    function: [
      "강의 결제 및 시청",
      "강의 등록",
      "질문게시판",
      "스터디모집 게시판",
    ],
    github: "github.com/sunghyun-biblee/ClassHub",
    description: "LMS(학습 관리)시스템을 제공하기 위한 웹 사이트 입니다.",
  },
  {
    date: "2024.03~2024.05",
    projectImg: MyPortfolio,
    category: "팀 프로젝트",
    title: "My Portfolio",
    skills: ["Typescript", "React", "styled-components", "tailwindCSS"],
    deploy: null,
    function: ["간단한 자기소개", "기술 스택", "진행한 프로젝트", "인적사항"],
    github: "github.com/sunghyun-biblee/MyPortfolio",
    description: "포트폴리오를 위해 제작한 웹사이트 입니다.",
  },
];
// #96EBA0
export const Projects = ({ value }: Itest) => {
  const [current, setCurrent] = useState<number>(0);

  const handleLeftClick = () => {
    if (current === 0) {
      setCurrent(projectArray.length - 1);
    } else {
      setCurrent((prev) => prev - 1);
    }
  };
  const handleRightClick = () => {
    if (current === projectArray.length - 1) {
      setCurrent(0);
    } else {
      setCurrent((prev) => prev + 1);
    }
  };

  return (
    <div
      className="  min-h-[100vh] w-[100%] flex justify-center bg-gradient-to-b from-[#D8F9DA] to-[#efefef] lg:pt-[10rem] mysm:pt-[7rem]
      font-pretendard
"
      ref={value.element}
    >
      <div className="max-w-[1400px] w-[100vw] px-3 flex flex-col ">
        <h1
          className="text-left lg:text-6xl md:text-6xl mysm:text-[40px] uppercase font-extrabold [text-shadow:_5px_3px_3px_#3d9ca4] py-5 mb-10
        border-b-4 border-[#181F1B]
        "
        >
          Project
        </h1>
        <div>
          <section className="flex justify-around items-center">
            <div onClick={handleLeftClick}>left</div>
            {projectArray.map((item, index) => (
              <ProjectItemTwo
                item={item}
                current={current}
                index={index}
                key={item.date + index}
              ></ProjectItemTwo>
            ))}
            {/* {projectArray.map((item, index) => (
              <ProjectsItem item={item} key={item.date + index}></ProjectsItem>
            ))}
            <TripFixedProejct></TripFixedProejct> */}
            <div onClick={handleRightClick} className="text-gray-300">
              right
            </div>
          </section>
          <div className="flex justify-center items-center gap-[1rem] mt-[5rem] ">
            {/* {renderDot()} */}
            {projectArray.map((_, index) => (
              <Dot
                key={new Date().getHours() + index}
                value={index === current}
                className="transition-all duration-[600ms] ease-linear"
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Dot = styled.span<{ value: boolean }>`
  display: inline-block;
  width: 1rem;
  height: 1rem;

  background-color: ${(props) =>
    props.value ? "rgb(94, 163, 236)" : "rgb(209, 213, 219)"};
  filter: ${(props) =>
    props.value ? "drop-shadow(0 0 15px rgb(9, 117, 232))" : ""};

  border-radius: 100%;
  scale: ${(props) => (props.value ? "1.15" : "1")};
`;
