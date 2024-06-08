import { ScrollMoveType } from "components/projects/Projects";
import { useScrollMove } from "hooks/useScrollMove";
import React, { RefObject } from "react";

interface Itest {
  value: ScrollMoveType;
}
export const Test = ({ value }: Itest) => {
  return (
    <>
      <div ref={value.element}>123</div>
    </>
  );
};
