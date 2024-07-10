import React from "react";
import { useNavigate } from "react-router-dom";

type ReadMeBtnProps = {
  projectId: string;
};
export const ReadMeBtn = ({ projectId }: ReadMeBtnProps) => {
  const nav = useNavigate();
  const handleReadMeClick = () => {
    document.body.style.overflowY = "hidden";
    return nav(`/${projectId}`);
  };
  return (
    <button
      onClick={handleReadMeClick}
      className="bg-[#0060d1] text-[#d1f5ff] font-medium rounded-md py-2 md:px-3 min-h-[36px] mysm:px-2 md:text-base mysm:text-xs"
    >
      자세히보기 ▶ README
    </button>
  );
};
