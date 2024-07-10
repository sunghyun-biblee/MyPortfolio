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
    <div className="absolute top-0 right-0 z-10 p-5">
      <div className="flex flex-col items-center ">
        <button onClick={handleCloseModal} className="w-10 h-10 p-1 mb-7">
          <XMark color={"white"} />
        </button>
        {github && (
          <GithubBtn
            href={`https://${github}`}
            className="w-10 h-10 p-1 cursor-pointer mb-7"
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
    <div className="w-10 h-10 p-1 mb-7">
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
