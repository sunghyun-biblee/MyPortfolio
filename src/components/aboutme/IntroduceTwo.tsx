import React, { useEffect, useState } from "react";
import preview from "assets/img/profileImg.jpg";
import styled from "styled-components";
export const IntroduceTwo = () => {
  const [isFlip, setIsFlip] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlip((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, [isFlip]);

  const handleImgClick = () => {
    setIsFlip(!isFlip);
  };
  return (
    <div
      className="h-[100dvh] relative  w-[100%]  box-border overflow-hidden 
    bg-gradient-to-b from-blue-500 to-cyan-500
    "
    >
      <div
        className="flex h-[100vh] lg:max-w-[1200px] w-[100%] justify-around items-center text-white mx-auto my-0
      animate-introExpand-container   relative
      transition ease-in duration-[800ms] transform translate-x-[1400px]"
        id="container"
      >
        <div className="w-[100%] " id="container_content ">
          <div className="overflow-hidden h-auto" id="title">
            <h1
              className="text-[40px] text-white mb-[20px] 
              transform translate-y-[100px] animate-introSlideIn-title
              font-mono"
            >
              Frontend Developer "sungHyun"
            </h1>
          </div>
          <div className="flex items-center mt-[100px]">
            <div
              className="w-[50%]  flex flex-col justify-between"
              id="container_content_inner"
            >
              <div className="h-auto overflow-hidden" id="par">
                <p
                  className="leading-[40px] transform translate-y-[300px]
              animate-introSlideUp-description text-[26px] text-right
              font-mono"
                >
                  꾸준히 우상향할 개발자 조성현 입니다 <br />
                  문제해결의 위해 끊임없이 고민하고 <br />
                  원하는 목표를 위해 전진합니다
                </p>
              </div>
              <div className="flex justify-end mt-[50px]">
                <div
                  className="h-[100%] relative w-[200px] overflow-hidden"
                  id="btns"
                >
                  <button
                    className="bg-transparent border-[1px] border-white
              rounded-[50px] py-[8px] px-[12px] text-white text-[16px]
              uppercase relative mt-[50px] outline-none
               transform
               translate-y-[50px]
            animate-introSlideUp-button"
                    id="btns_more"
                    onClick={() => setIsFlip((prev) => !prev)}
                  >
                    Click Card {">>"}
                  </button>
                </div>
              </div>
            </div>
            <div
              className="mx-[50px] w-[50%] overflow-hidden "
              id="container_outer_img"
            >
              <div
                className="w-[100%] animate-introSlideIn-profileImg
                transform translate-x-[1400px] "
                id="img-inner"
                onClick={handleImgClick}
              >
                <FlipBox value={isFlip}>
                  <FlipCard className="rounded-lg shadow-2xl  overflow-hidden">
                    <Img src={preview} alt="" id="container_img" />
                  </FlipCard>

                  <FlipCardTwo className="rounded-lg shadow-2xl overflow-hidden">
                    <ul className="w-[100%] h-[100%] bg-[#e7e7e7]/80 text-black">
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
                      </li>
                    </ul>
                  </FlipCardTwo>
                </FlipBox>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute top-0 left-0 right-0 bottom-0 
        h-[100%] -z-30
     bg-gradient-to-r from-slate-500 to-cyan-500 "
        id="overlay"
      ></div>
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
  max-width: 500px;
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
