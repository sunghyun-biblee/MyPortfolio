import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import githubIcon from "assets/icons/github-whitemark.svg";
import url from "assets/icons/url.svg";
type ModalBtnBoxPros = {
  github?: string;
  deploy?: string | null;
};
export const ProjectModalBtnBox = ({ github, deploy }: ModalBtnBoxPros) => {
  const nav = useNavigate();
  const handleCloseModal = () => {
    document.body.style.overflowY = "auto";
    return nav("/");
  };
  return (
    <div className="absolute top-0 right-0 z-10 md:p-5 mysm:p-3">
      <div className="flex md:flex-col mysm:flex-row-reverse items-center ">
        <button
          onClick={handleCloseModal}
          className="w-8 h-8 p-1 md:mb-5 lg:w-10 lg:h-10"
        >
          <XMark color={"white"} />
        </button>
        {github && (
          <GithubBtn
            href={`https://${github}`}
            className="w-10 h-10 p-1 cursor-pointer md:mb-5 mysm:mr-2 md:mr-0"
            target="_blank"
            rel="noopener  noreferrer"
          />
        )}
        {deploy && (
          <a href={deploy} target="_blank" rel="noopener  noreferrer">
            <DeployBtn />
          </a>
        )}
      </div>
    </div>
  );
};
const DeployBtn = () => {
  return (
    <div className="lg:w-10 lg:h-10 md:w-8 md:h-8 mysm:w-7 mysm:h-7 p-1 md:mb-5 mysm:mr-2 md:mr-0">
      <svg
        data-slot="icon"
        fill="none"
        strokeWidth="1.5"
        stroke="#efefef"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
        ></path>
      </svg>
    </div>
  );
};

const GithubBtn = styled.a`
  background-image: url(${githubIcon});
  background-size: 34px 34px;
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    background-size: 30px 30px;
  }
  @media screen and (min-width: 375px) and (max-width: 767px) {
    background-size: 24px 24px;
  }
`;

const XMark = ({ color }: { color: string }) => {
  return (
    <svg
      data-slot="icon"
      fill="none"
      strokeWidth="1.5"
      stroke={`${color}`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      ></path>
    </svg>
  );
};
