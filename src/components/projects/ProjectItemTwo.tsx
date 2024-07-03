import React, { useEffect, useRef } from "react";
import { projectItemType } from "./Projects";
import preview from "assets/img/preview.jpg";
import styled from "styled-components";
import githubIcon from "assets/img/github-mark.svg";

interface IprojectItem {
  item: projectItemType;
  current: number;
  index: number;
}
export const ProjectItemTwo = ({ item, current, index }: IprojectItem) => {
  const ProejctRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ProejctRef.current && index === current) {
      setTimeout(() => {
        if (ProejctRef.current) {
          ProejctRef.current.style.display = "block";
        }
      }, 300);
      setTimeout(() => {
        if (ProejctRef.current) {
          ProejctRef.current.style.opacity = "1";
        }
      }, 350);
    } else if (ProejctRef.current) {
      ProejctRef.current.style.opacity = "0";
      setTimeout(() => {
        if (ProejctRef.current) {
          ProejctRef.current.style.display = "none";
        }
      }, 300);
    }
  }, [current, index]);

  return (
    <Article
      className={`mt-[3rem] w-[600px] transition-all  duration-300 `}
      ref={ProejctRef}
    >
      <div>
        <div className="overflow-hidden  rounded-md w-[100%] max-h-[350px] ">
          <img src={item.projectImg} alt="webIMG" className=" " />
        </div>
        <div>
          <ul className="pt-[1rem]">
            <li className="relative">
              <ProjectTitle className="text-3xl font-bold uppercase">
                {item.title}
              </ProjectTitle>
            </li>
            <li className="mt-[1rem]">
              <ProjectSpan className="text-blue-950 font-medium">
                {item.category}
              </ProjectSpan>
            </li>
            <li className="mt-[1rem]">
              <ProjectSpan>{item.description}</ProjectSpan>
            </li>
            <li className="flex items-center mt-[1rem]">
              {item.skills.map((item, index) => (
                <ProjectSkill
                  key={item + index + item}
                  className="bg-skillbg rounded-lg font-medium text-blue-500 shadow-sm"
                >
                  {item}
                </ProjectSkill>
              ))}
            </li>
            <li className="flex justify-start items-center mt-[2rem]">
              <DetailBtn>자세히보기 ▶</DetailBtn>
              <GithubBtn
                href={item.github}
                target="_blank"
                rel="noopener  noreferrer"
                className="bg-[#efefef] border-[1px] border-indigo-950 rounded-md"
              >
                Github
              </GithubBtn>
              {item.deploy && (
                <DeployBtn
                  href={item.deploy}
                  target="_blank"
                  rel="noopener  noreferrer"
                >
                  배포
                </DeployBtn>
              )}
            </li>
          </ul>
        </div>
      </div>
    </Article>
  );
};

const Article = styled.article`
  animation-fill-mode: forwards;
`;
const DetailBtn = styled.button``;

const GithubBtn = styled.a`
  display: flex;
  align-items: end;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 0.75rem;
  margin: 0 10px;

  &::before {
    content: "";
    margin-right: 0.125rem;
    width: 28px;
    height: 28px;
    background: url(${githubIcon}) no-repeat center center;

    background-size: 22px 22px;
  }
`;
const DeployBtn = styled.a``;
const ProjectSkill = styled.span`
  padding: 5px 10px;
  margin-right: 10px;
`;
const ProjectSpan = styled.span`
  display: inline-block;

  width: 100%;
  text-align: left;
`;
const ProjectTitle = styled.h1`
  display: flex;
  align-items: end;
  font-weight: 700;
  &::after {
    content: "";
    width: 10px;
    height: 10px;
    margin-left: 3px;
    border-radius: 100%;
    margin-bottom: 5px;
    background-color: rgb(96, 165, 250);
  }
`;
