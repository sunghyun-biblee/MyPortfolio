import React, { useEffect, useState } from "react";
import preview from "assets/img/profileImg.jpg";
import styled from "styled-components";
import { ScrollMoveType } from "components/projects/Projects";

interface IIntroduce {
  value: ScrollMoveType;
}

export const IntroduceTwo = ({ value }: IIntroduce) => {
  const [isFlip, setIsFlip] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlip((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, [isFlip]);

  const handleImgClick = () => {
    setIsFlip(!isFlip);
  };
  return (
    <div
      className="h-[100dvh] relative  w-[100%]  box-border overflow-hidden 
    bg-gradient-to-b from-blue-500 to-cyan-500
    flex flex-col justify-center items-center
    "
      ref={value.element}
    >
      <div
        className="flex h-[100vh] lg:max-w-[1200px] w-[100%] justify-around items-center text-white mx-auto my-0
      animate-introExpand-container   relative
      transform translate-x-[1400px]"
        id="container"
      >
        <div className="w-[100%] " id="container_content ">
          <div className="flex justify-center">
            <div className="mx-[50px] w-[50%]  " id="container_outer_img">
              <div
                className=" animate-introPopUp-profileImg
                opacity-0
                 flex justify-center items-center cursor-pointer"
                id="img-inner"
                onClick={handleImgClick}
              >
                <FlipBox value={isFlip}>
                  <FlipCard className="rounded-lg shadow-2xl  overflow-hidden">
                    <Img src={preview} alt="" id="container_img" />
                  </FlipCard>

                  <FlipCardTwo className="rounded-lg shadow-2xl overflow-hidden">
                    <ul className="w-[100%] h-[100%] bg-[#E6F4F1] text-black">
                      <li>
                        <span>조성현</span>
                      </li>
                      <li>
                        <span>1999.10.14</span>
                      </li>
                      <li>
                        <span>대구광역시 남구</span>
                      </li>
                      <li>
                        <span>계명문화대학교 졸업</span>
                        <span>2018.03~2020.08</span>
                      </li>
                      <li>
                        <span>멀티캠퍼스 웹 개발자 파트 수료</span>
                        <span>2023.08~2024.02</span>
                      </li>
                    </ul>
                  </FlipCardTwo>
                </FlipBox>
              </div>
            </div>
          </div>
          <div className="overflow-hidden h-auto my-10" id="title">
            <h1
              className="text-[40px] text-white 
              transform translate-y-[110px] animate-introSlideIn-title
              font-mono"
            >
              Frontend_Developer "sungHyun"
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 500px;
`;
const FlipBox = styled.div<{ value: boolean }>`
  transition: 0.8s;
  transform-style: preserve-3d;
  position: relative;
  min-width: 300px;
  max-width: 300px;
  height: 500px;
  transform: ${(props) => (props.value ? "rotateY(180deg)" : "rotateY(0deg)")};
`;
const FlipCard = styled.div`
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid gray;
`;
const FlipCardTwo = styled.div`
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid gray;
  transform: rotateY(180deg);
`;
