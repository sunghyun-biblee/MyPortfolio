import React from "react";
import Best from "assets/img/Award/Best.webp";
import Completed from "assets/img/Award/Completed.webp";
import styled from "styled-components";

interface IAboutMeModal {
  isModal: boolean;
  setIsModal: (value: boolean) => void;
  page: number;
  setPage: (value: number) => void;
}

export const AboutMeModal = ({
  isModal,
  setIsModal,
  page,
  setPage,
}: IAboutMeModal) => {
  return (
    <div
      className={`absolute top-0 w-[100%] h-[100%] backdrop-blur-md  flex flex-col  items-center justify-center transition-opacity
       ${isModal ? "opacity-100 z-[11]" : "opacity-0 z-0"}`}
    >
      {page !== 0 && (
        <button
          className="text-white text-6xl font-pretendard absolute 
     top-[40%] 
      md:left-[15%] 
      mysm:left-[4%] "
          onClick={() => setPage(page - 1)}
        >
          {"<"}
        </button>
      )}
      {page !== 1 && (
        <button
          className="text-white text-6xl font-pretendard absolute 
        transition-all
     top-[40%] 
      md:right-[15%]
      mysm:right-[4%] "
          onClick={() => setPage(page + 1)}
        >
          {">"}
        </button>
      )}
      <div className={`flex relative overflow-hidden`}>
        <SlideBox
          value={page}
          className={`flex  lg:w-[600px]
        md:w-[400px]
        mysm:w-[250px] 
      
        transition-transform
        duration-300
        `}
        >
          <img
            src={Best}
            alt="best"
            className="
          lg:min-w-[600px] lg:h-[900px]
          md:min-w-[400px] md:h-[500px]
          mysm:min-w-[250px] mysm:h-[auto]"
          />
          <img
            src={Completed}
            alt="completed"
            className="lg:min-w-[600px] lg:h-[900px]
          md:min-w-[400px] md:h-[500px]
          mysm:min-w-[250px] mysm:h-[auto]"
          />
        </SlideBox>
      </div>
      <div className=" flex justify-center flex-col mt-[4rem]">
        <ul className="flex justify-center w-[100px] gap-[20px] r ">
          <PageNationIcon
            className={` ${page === 0 ? "current" : ""}`}
            onClick={() => setPage(0)}
          ></PageNationIcon>
          <PageNationIcon
            className={` ${page === 1 ? "current" : ""}`}
            onClick={() => setPage(1)}
          ></PageNationIcon>
        </ul>
        <button
          className="text-black font-pretendard font-semibold p-2 mt-[2rem] rounded-lg bg-[#9fc7f6]"
          onClick={() => setIsModal(false)}
        >
          닫기
        </button>
      </div>
    </div>
  );
};
const PageNationIcon = styled.li`
  cursor: pointer;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: rgba(102, 102, 107, 0.7);
  transition: all 0.7s;
  &.current {
    filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.85));
    background-color: white;
  }
`;

const SlideBox = styled.div<{ value: number }>`
  transform: ${(props) =>
    props.value === 0 ? `translateX(0%)` : `translateX(-${props.value}00%)`};
`;
