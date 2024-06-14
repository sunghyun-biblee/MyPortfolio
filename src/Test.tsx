import { ScrollMoveType } from "components/projects/Projects";
import { useScrollMove } from "hooks/useScrollMove";
import React, { RefObject } from "react";

interface Itest {
  value: ScrollMoveType;
}
export const Test = ({ value }: Itest) => {
  return (
    <div
      className="  min-h-[30vh] w-[100%] flex justify-center bg-gradient-to-b to-[#EDFEEE] from-[#D8F9DA] 
"
    >
      <div ref={value.element}>123</div>
    </div>
  );
};
