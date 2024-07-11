import { MarkDown } from "components/markdown/MarkDown";

import { ListToggleBox } from "components/Toggle/ListToggleBox";
import { ProjectDetailDatas } from "data/ProjectDetailDatas";
import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { ProjectModalBtnBox } from "./ProjectModalBtnBox";
import { OtherProjectDot } from "./OtherProjectDot";

type Bgcolor = {
  color: string;
};
const DetailContainer = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ItemList = styled.ul`
  width: 100%;
`;
const Item = styled.li`
  display: flex;
  width: 100%;
  padding-bottom: 0.5rem;
`;
const ListName = styled.h2`
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: left;
  padding-bottom: 0.75rem;
  font-weight: 700;
`;

const ListContainer = styled.div`
  width: 75%;
  margin-top: 1rem;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 90%;
  }
  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 100%;
  }
`;
const DetailFirst = styled.article<Bgcolor>`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  z-index: 1;
  &::before {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    height: 55%;
    width: 100%;
    content: " ";
    background-color: ${(props) => (props.color ? props.color : "#5ea3ec")};
    filter: brightness(95%);
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    &::before {
      height: 50%;
    }
  }
  @media screen and (min-width: 375px) and (max-width: 767px) {
    &::before {
      height: 40%;
    }
  }
`;
const DetailSecond = styled.article`
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2.5rem;
`;

interface IProjectDetail {
  title: string;
  mainImage: string;
  colorConcept: string;
  personnel: number[];
  date: string;
  Contribution: string;
  role: string;
  skills: { name: string; description: string }[];
  summary: string;
  background: string;
  mainFuntion: string[];
  myActivities: { title: string; description: string }[];
  troubleShooting: {
    title: string;
    trouble: string;
    Resolution: string;
    serach?: string;
    myThink?: string;
  }[];
  ProjectIMG: string[];
  deploy: string;
  github: string;
  category: string;
}
export const ProjectDetail = () => {
  const ProjectId = useLocation().pathname.split("/")[1];
  const Data = ProjectDetailDatas.find((item) => item.id === ProjectId);

  const renderCategory = () => {
    if (Data && Data.personnel[2]) {
      return (
        <span className="md:mx-5 mysm:mx-3">{`${Data.personnel[2]}인 (프론트엔드 ${Data.personnel[0]}명, 백엔드 ${Data.personnel[1]}명)`}</span>
      );
    } else {
      return <span className="mx-5">1인 (개인 프로젝트)</span>;
    }
  };
  return (
    <DetailContainer
      className="fixed top-0 w-[100vw] bg-transparent backdrop-blur-md md:p-9 mysm:p-0
     left-0 opacity-0
     z-20 max-h-[100vh] overflow-scroll font-pretendard  animate-Modal-on
      "
    >
      {Data && (
        <>
          <div className="mysm:block md:hidden">
            <OtherProjectDot></OtherProjectDot>
            <ProjectModalBtnBox
              github={Data.github}
              deploy={Data.deploy}
            ></ProjectModalBtnBox>
          </div>

          <section className="  lg:mx-[5vw] bg-[white] flex flex-col items-center shadow-xl relative ">
            <DetailFirst
              color={Data.colorConcept}
              className="md:p-5 mysm:p-2 w-[100%]"
            >
              <h1 className="text-4xl  md:pt-10 mysm:pt-[4.5rem] uppercase font-bold text-[#efefef]">
                {Data.title}
              </h1>
              <p className="flex justify-center py-5 md:text-base mysm:text-xs text-[#efefef] w-[100%]">
                <span>{Data.date}</span>
                {renderCategory()}
                <span>기여도 ({Data.Contribution})</span>
              </p>
              <img
                src={Data.mainImage}
                alt="mainImage"
                className="md:w-[calc(100vw-60vw)] mysm:w-[calc(100vw-50vw)] h-[100%] border-[1px] rounded-md"
              />
              <div className="pt-6 max-w-[750px]">
                <MarkDown>{Data.summary}</MarkDown>
                {/* <p>{Data.summary}</p> */}

                <p className="whitespace-pre-wrap md:pt-5 mysm:pt-3 break-keep leading-6">
                  {Data.background}
                </p>
              </div>
            </DetailFirst>
            <DetailSecond className="lg:px-12 md:px-8 mysm:px-4 pb-6">
              <ListContainer className="border-t-[1px] pt-10">
                <ListName>✨ 핵심 기능 및 특징</ListName>
                <ItemList>
                  {Data.mainFuntion.map((item, index) => (
                    <Item key={item + index}>
                      <span className="block ml-2 mr-2 text-blue-500 font-bold">
                        ✔
                      </span>
                      <span className="text-left break-keep">{item}</span>
                    </Item>
                  ))}
                </ItemList>
              </ListContainer>
              <ListContainer>
                <ListName>🛠️ 사용 기술 스택</ListName>
                <ItemList className="lg:ml-2">
                  {Data.skills.map((item, index) => (
                    <Item key={item.description + index}>
                      <ListToggleBox
                        name={item.name}
                        description={item.description}
                        category="skill"
                      ></ListToggleBox>
                    </Item>
                  ))}
                </ItemList>
              </ListContainer>
              <ListContainer>
                <ListName>✍ 프로젝트 기여도</ListName>
                <ItemList>
                  {Data.myActivities.map((item, index) => (
                    <Item>
                      <ListToggleBox
                        category="myActivities"
                        title={item.title}
                        description={item.description}
                      />
                    </Item>
                  ))}
                </ItemList>
              </ListContainer>
              {Data.troubleShooting && (
                <ListContainer>
                  <ListName>💫 트러블 슈팅</ListName>
                  <ItemList>
                    {Data.troubleShooting.map((item, index) => (
                      <Item>
                        <ListToggleBox
                          category="trouble"
                          title={item.title}
                          trouble={item.trouble}
                          Resolution={item.Resolution}
                          search={item.serach}
                          myThink={item.myThink}
                        ></ListToggleBox>
                      </Item>
                    ))}
                  </ItemList>
                </ListContainer>
              )}
            </DetailSecond>
            <div className="mysm:hidden md:block">
              <OtherProjectDot></OtherProjectDot>
              <ProjectModalBtnBox
                github={Data.github}
                deploy={Data.deploy}
              ></ProjectModalBtnBox>
            </div>
          </section>
        </>
      )}
    </DetailContainer>
  );
};
