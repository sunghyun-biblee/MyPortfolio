import React, { RefObject, forwardRef } from "react";

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
    <div className=" min-h-[100vh] w-[100%]" ref={value.element}>
      Projects
    </div>
  );
};
