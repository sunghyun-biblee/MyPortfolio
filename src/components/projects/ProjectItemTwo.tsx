import React, { useEffect, useRef } from "react";
import { projectItemType } from "./Projects";
import preview from "assets/img/preview.jpg";
import styled from "styled-components";
import url from "assets/img/url.png";
import githubIcon from "assets/img/github-mark.svg";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { MarkDown } from "components/markdown/MarkDown";

interface IprojectItem {
  item: projectItemType;
  current: number;
  index: number;
}
export const ProjectItemTwo = ({ item, current, index }: IprojectItem) => {
  const location = useLocation();
  const ProejctRef = useRef<HTMLDivElement>(null);
  const nav = useNavigate();
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

  const handleReadMeClick = (id: string) => {
    document.body.style.overflowY = "hidden";
    switch (id) {
      case "PortFolio":
        return nav("/PortFolio");
      case "ClassHub":
        return nav("/ClassHub");
      case "TripFixied":
        return nav("/TripFixied");
      default:
        return nav("/");
    }
  };
  return (
    <Article
      className={` max-w-[700px] w-[100vw] transition-all  duration-300 shadow-lg `}
      ref={ProejctRef}
    >
      <div className="h-[100%]">
        <div className="overflow-hidden  rounded-md w-[100%] h-[390px] ">
          <img
            src={item.projectImg}
            alt="webIMG"
            className="w-[100%] h-[100%] "
          />
        </div>

        <ul
          className="md:p-5 mysm:p-4 md:text-base mysm:text-sm
        flex flex-col justify-between h-[calc(100%-390px)]"
        >
          <li className="flex justify-between items-center">
            <ProjectTitle className="md:text-3xl mysm:text-xl font-bold uppercase">
              {item.title}
            </ProjectTitle>
            <ProjectSpan className="text-blue-950 font-medium ">
              {item.category}
            </ProjectSpan>
          </li>

          <li className="md:mt-[1rem] mysm:mt-[0.5rem] text-left font-medium">
            <ProjectSpan>
              <MarkDown>{item.description}</MarkDown>
            </ProjectSpan>
          </li>
          <li className="flex items-center mt-[1rem] flex-wrap w-[100%] gap-2">
            {item.skills.map((item, index) => (
              <span
                key={item + index + item}
                className="bg-skillbg rounded-md font-medium text-blue-500 
                px-2 py-1 shadow-md  md:text-base mysm:text-xs
                "
              >
                {item}
              </span>
            ))}
          </li>

          <li className="flex justify-between items-center mt-[2rem] ">
            <div className="flex">
              <GithubBtn
                href={item.github}
                target="_blank"
                rel="noopener  noreferrer"
                className="py-2 md:px-3  mysm:px-2 md:text-base mysm:text-xs "
              >
                Github
              </GithubBtn>
              {item.deploy && (
                <DeployBtn
                  href={item.deploy}
                  target="_blank"
                  rel="noopener  noreferrer"
                  className="py-2 md:px-3  mysm:px-2 md:text-base mysm:text-xs"
                >
                  <span> 사이트 바로가기</span>
                </DeployBtn>
              )}
            </div>
            <DetailBtn
              onClick={() => handleReadMeClick(item.id)}
              className=" py-2 md:px-3 min-h-[36px]  mysm:px-2 md:text-base mysm:text-xs"
            >
              자세히보기 ▶ README
            </DetailBtn>
          </li>
        </ul>
      </div>
    </Article>
  );
};

const Article = styled.article`
  animation-fill-mode: forwards;
`;
const DetailBtn = styled.button`
  background-color: #0060d1;
  color: #d1f5ff;
  font-weight: 500;
  border-radius: 6px;
`;

const GithubBtn = styled.a`
  background-color: #efefef;
  display: flex;
  align-items: center;
  font-weight: 600;

  border: 1px solid rgba(30, 27, 75, 0.15);
  border-radius: 6px;
  &::before {
    content: " ";
    margin-right: 0.25rem;
    width: 26px;
    height: 26px;
    background: url(${githubIcon}) no-repeat center center;
    background-size: 24px 24px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    &::before {
      width: 24px;
      height: 24px;
      background-size: 22px 22px;
    }
  }
  @media screen and (min-width: 375px) and (max-width: 767px) {
    &::before {
      width: 20px;
      height: 20px;
      background-size: 20px 20px;
    }
  }
`;
const DeployBtn = styled.a`
  background-color: #efefef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  margin-left: 10px;

  border-radius: 6px;
  border: 1px solid rgba(30, 27, 75, 0.15);

  &::before {
    content: " ";
    margin-right: 0.25rem;
    width: 26px;
    height: 26px;
    background: url(${url}) no-repeat center center;
    background-size: 24px 24px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    &::before {
      width: 24px;
      height: 24px;
      background-size: 22px 22px;
    }
  }
  @media screen and (min-width: 375px) and (max-width: 767px) {
    &::before {
      width: 20px;
      height: 20px;
      background-size: 20px 20px;
    }
  }
`;

const ProjectSpan = styled.span`
  display: inline-block;
  text-align: left;
  .markDownContainer {
    code {
      font-size: 0.9rem;
      font-family: Pretendard;
      background-color: rgb(223, 226, 229);
      padding: 0.25rem 0.4rem;
      border-radius: 6px;
    }
  }
`;
const ProjectTitle = styled.h1`
  display: flex;
  align-items: end;

  font-weight: 700;
  &::after {
    display: block;
    content: "";
    width: 7px;
    height: 7px;
    margin-left: 3px;
    border-radius: 100%;
    margin-bottom: 5px;
    background-color: rgb(96, 165, 250);
  }
  /* @media screen and (min-width: 1024px) {
    background-size: 1100px auto;
    background-position: 23% 90%;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    background-size: 1010px auto;

    background-position: 10% 100%;
  }
  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 100%;
    background-size: 1010px auto;

    background-position: 10% 100%;
  } */
`;
