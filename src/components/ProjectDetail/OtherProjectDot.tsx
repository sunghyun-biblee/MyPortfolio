import { ProjectDetailDatas } from "data/ProjectDetailDatas";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

type DotProps = {
  value: boolean;
  color: string | null;
};
export const OtherProjectDot = () => {
  const proejctId = useLocation().pathname.split("/")[1];
  const colorConcept = ProjectDetailDatas.find(
    (item) => item.id === proejctId
  )?.colorConcept;

  const nav = useNavigate();
  const ProjectIdList = ["My", "Class", "Trip"];
  return (
    <div className="absolute top-0 left-0 z-10 p-5 flex flex-col items-start">
      <div>
        {ProjectIdList.map((item, index) => (
          <Dot
            key={new Date().getHours() + index}
            value={item === proejctId}
            color={colorConcept ? colorConcept : null}
            className="transition-all duration-500 ease-linear cursor-pointer mr-4"
            onClick={() => nav(`/${item}`)}
          />
        ))}
      </div>
      <span className="text-gray-200 inline-block mt-1 text-xs">
        *점을 눌러 다른 프로젝트도 확인해보세요
      </span>
    </div>
  );
};

const Dot = styled.span<DotProps>`
  display: inline-block;
  width: 1rem;
  height: 1rem;

  background-color: ${(props) =>
    props.value ? props.color : "rgb(209, 213, 219)"};
  filter: ${(props) =>
    props.value ? "drop-shadow(0 0 5px rgb(255, 255, 255))" : ""};

  border-radius: 100%;
  scale: ${(props) => (props.value ? "1.15" : "1")};
`;
