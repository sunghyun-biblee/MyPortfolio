import React, { RefObject, forwardRef } from "react";
import { ProjectsItem } from "./ProjectsItem";

export interface ScrollMoveType {
  element: RefObject<HTMLDivElement>;
  onMove: () => void;
  name: string;
}
interface Itest {
  value: ScrollMoveType;
}
export const Projects = ({ value }: Itest) => {
  return (
    <div
      className="  min-h-[100vh] w-[100%] flex justify-center bg-gradient-to-b from-[#96EBA0] to-[#D8F9DA] 
"
      ref={value.element}
    >
      <ProjectsItem></ProjectsItem>
    </div>
  );
};
