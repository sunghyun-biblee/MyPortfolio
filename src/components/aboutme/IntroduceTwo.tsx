import React, { useEffect, useState } from "react";
import preview from "assets/img/profileImg.webp";
import styled from "styled-components";
import { ScrollMoveType } from "components/projects/Projects";
import MyQR from "assets/img/myQR.webp";
import Arrow from "assets/img/ClickArrow.svg";
interface IIntroduce {
  value: ScrollMoveType;
}

export const IntroduceTwo = ({ value }: IIntroduce) => {
  const [isFlip, setIsFlip] = useState<boolean>(false);
  const [isClick, setIsClick] = useState<boolean>(false);
  useEffect(() => {
    if (isClick && isFlip) {
      return;
    } else {
      const interval = setInterval(() => {
        setIsFlip((prev) => !prev);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [isFlip, isClick]);

  const handleImgClick = () => {
    if (isFlip) {
      setIsFlip(false);
    } else {
      setIsFlip(true);
    }
  };

  return (
    <div
      className="h-[100dvh] relative  w-[100%]  box-border overflow-hidden 
    bg-gradient-to-b from-blue-500 to-cyan-500
    flex flex-col justify-center items-center
    font-pretendard
    "
      ref={value.element}
    >
      <div
        className="flex h-[100vh] lg:max-w-[1400px] w-[100%] justify-around items-center text-white mx-auto lg:mt-[0px] mysm:mt-[100px] transition-all duration-700
      animate-introExpand-container   relative
      transform translate-x-[1400px]"
        id="container"
      >
        <div className="w-[100%] " id="container_content ">
          <div className="flex justify-center">
            <div
              className=" animate-introPopUp-profileImg mysm:mt-[50px] lg:mt-[0px]
                opacity-0 w-[330px] h-[530px] relative
                 flex justify-center items-center cursor-pointer"
              id="img-inner"
              onClick={handleImgClick}
              onMouseEnter={() => {
                setIsClick(true);
              }}
              onMouseLeave={() => {
                setIsClick(false);
              }}
            >
              <div className="absolute -top-12 flex items-center">
                <span className="text-xl font-semibold mr-3">Click Card !</span>
                <img
                  src={Arrow}
                  alt="arrow"
                  className="w-10 h-10 animate-bounce"
                />
              </div>
              <FlipBox value={isFlip} className=" relative  shadow-2xl ">
                {/* <Edge className="w-[35px] h-[35px] absolute bg-[#158DC0] -bottom-5 right-12 z-[2] transform rotate-[45deg] "></Edge> */}
                <FlipCardFront className="rounded-lg overflow-hidden relative">
                  <Edge />
                  <Img src={preview} alt="img" id="container_img" />
                </FlipCardFront>

                <FlipCardBack className="rounded-lg overflow-hidden  bg-blue-500 flex relative">
                  <Edge />
                  <div className=" ml-[8%] w-[17%] h-[100%] bg-blue-500/50 z-[3] brightness-[55%]"></div>
                  <ul className="w-[75%] h-[100%] right-0  text-white z-[4] box-border p-3 text-left tracking-wide">
                    <Li className="text-right font-semibold text-lg ">
                      <span>FrontEnd</span>
                    </Li>
                    <Li className="flex justify-between pt-10">
                      <span className="font-semibold">조성현</span>
                      <GraySpan>1999.10</GraySpan>
                    </Li>

                    <li className="h-[2px] bg-[#efefef] my-5"></li>
                    <Li className="flex justify-between mb-[10px]">
                      <span>정보처리산업기사</span>
                      <GraySpan>2022.06</GraySpan>
                    </Li>
                    <Li>
                      <span className="inline-block pb-1">
                        계명문화대학교 컴퓨터학부
                      </span>
                      <GraySpan>2018.03~2020.08</GraySpan>
                    </Li>
                    <Li>
                      <span className="inline-block pb-1">
                        멀티캠퍼스 웹 개발자 수료
                      </span>
                      <GraySpan>2023.08~2024.02</GraySpan>
                    </Li>

                    <li className="flex justify-start mt-[25px] ml-[5px] ">
                      {/* <span>Email</span> */}
                      {/* <span className="text-gray-300 text-sm">
                          sunghyun543@gmail.com
                        </span> */}
                      <div className="flex flex-col items-center">
                        <span className="tracking-wide text-lg">KakaoQR</span>
                        <img
                          src={MyQR}
                          alt="QRcode"
                          className="w-[80px] h-[80px]"
                        />
                      </div>
                    </li>
                  </ul>
                </FlipCardBack>
              </FlipBox>
            </div>
          </div>
          <div
            className="overflow-hidden min-h-[70px]
          max-h-[90px] my-10 py-1"
            id="title"
          >
            <h1
              className="lg:text-5xl md:text-4xl mysm:text-3xl text-white py-1
              transform translate-y-[110px] animate-introSlideIn-title
              font-Nanum [text-shadow:_4.5px_4px_4px_#335154] font-semibold"
            >
              Frontend_Developer 'sungHyun'
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
const Li = styled.li`
  padding: 0.7rem 0px;
`;
const GraySpan = styled.span`
  color: rgb(209 213 219);
`;
const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
const Edge = styled.div`
  border-top-left-radius: 45%;
  width: 50px;
  height: 50px;
  position: absolute;
  right: 3.5rem;
  bottom: -1.75rem;
  z-index: 5;
  transform: rotate(45deg);
  @media screen and (min-width: 1024px) {
    background-color: rgba(21, 136, 186, 0.98);
  }
  @media screen and (min-width: 375px) and (max-width: 1023px) {
    background-color: rgba(18, 139, 185, 0.99);
  }
`;
const FlipBox = styled.div<{ value: boolean }>`
  transition: 0.8s;
  transform-style: preserve-3d;
  position: relative;
  width: 100%;
  height: 100%;
  transform: ${(props) => (props.value ? "rotateY(180deg)" : "rotateY(0deg)")};
`;
const FlipCardFront = styled.div`
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* border: 1px solid gray; */
`;
const FlipCardBack = styled.div`
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  transform: rotateY(180deg);
`;
