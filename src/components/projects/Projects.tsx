import React, { RefObject, forwardRef } from "react";
import { ProjectsItem } from "./ProjectsItem";
import { TripFixedProejct } from "./TripFixedProejct";

export interface ScrollMoveType {
  element: RefObject<HTMLDivElement>;
  onMove: () => void;
  name: string;
}
interface Itest {
  value: ScrollMoveType;
}

export type projectItemType = {
  projectImg: string[] | null;
  title: string;
  skills: string[];
  url: string | null;
  function: string[];
  github: string;
  description: string;
  date: string;
};
const projectArray = [
  {
    date: "2024.03~2024.05",
    projectImg: null,
    title: "trip fixed",
    skills: ["Javascript", "React", "styled-components", "firebase"],
    url: "",
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
    projectImg: null,
    title: "Class Hub",
    skills: [
      "Typescript",
      "React",
      "styled-components",
      "tailwindCSS",
      "React-Query",
    ],
    url: "https:api.devproject.store",
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
    projectImg: null,
    title: "My Portfolio",
    skills: ["Typescript", "React", "styled-components", "tailwindCSS"],
    url: "",
    function: ["간단한 자기소개", "기술 스택", "진행한 프로젝트", "인적사항"],
    github: "github.com/sunghyun-biblee/MyPortfolio",
    description: "포트폴리오를 위해 제작한 웹사이트 입니다.",
  },
];

export const Projects = ({ value }: Itest) => {
  return (
    <div
      className="  min-h-[100vh] w-[100%] flex justify-center bg-gradient-to-b from-[#96EBA0] to-[#D8F9DA] lg:p-0 md:py-[5rem] mysm:py-[10rem]
"
      ref={value.element}
    >
      <div className="max-w-[1200px] w-[100vw] px-3 ">
        <h1
          className="text-left lg:text-6xl md:text-6xl mysm:text-[40px] uppercase font-extrabold [text-shadow:_5px_3px_3px_#3d9ca4] py-5 mb-14
        border-b-4 border-[#181F1B]
        "
        >
          Project
        </h1>
        <section className="flex flex-col">
          <TripFixedProejct></TripFixedProejct>
          {projectArray.map((item, index) => (
            <ProjectsItem item={item} key={item.date + index}></ProjectsItem>
          ))}
        </section>
      </div>
    </div>
  );
};
