import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { skillGridFirst, skillGridSecond } from "recoil/portfolioAtoms";
import styled from "styled-components";

type SkillItemProps = {
  title: string;
  icon?: string;
  text?: string[];
  PlusSkillIcon?: string | null;
  index: number;
};

export const SkillItemTwo = ({
  title,
  icon,
  PlusSkillIcon,
  index,
  text,
}: SkillItemProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const FirstGridTemplate = useSetRecoilState(skillGridFirst);
  const SecondGridTemplate = useSetRecoilState(skillGridSecond);

  const handleMouseEnter = (index: number) => {
    switch (index) {
      case 0:
        FirstGridTemplate("2fr 0.5fr 0.5fr");
        break;
      case 1:
        FirstGridTemplate("0.5fr 2fr 0.5fr");
        break;
      case 2:
        FirstGridTemplate("0.5fr 0.5fr 2fr");
        break;
      case 3:
        SecondGridTemplate("2fr 0.5fr 0.5fr");
        break;
      case 4:
        SecondGridTemplate("0.5fr 2fr 0.5fr");
        break;
      case 5:
        SecondGridTemplate("0.5fr 0.5fr 2fr");
        break;
    }
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    FirstGridTemplate("1fr 1fr 1fr");
    SecondGridTemplate("1fr 1fr 1fr");
    setIsHover(false);
  };
  return (
    <SkillLi
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
      className={`index${index}   min-w-[180px] `}
      value={isHover}
    >
      <div
        className={`flex  w-[100%] h-[100%] min-h-[175px] ${
          isHover ? "justify-start" : "justify-center"
        } `}
      >
        <div className="image-container">
          <img
            src={icon}
            alt="skillIcon"
            className="object-cover min-w-[150px]"
          />
        </div>
        <div id="detail" className="pl-5 h-full">
          <div className="flex justify-between items-center pb-3">
            <span className="inline-block text-3xl">{title}</span>
            {PlusSkillIcon && (
              <div className="flex items-center max-h-[50px]">
                <span>라이브러리 및 프레임워크</span>
                <img
                  src={PlusSkillIcon}
                  alt="plusSkill"
                  className="w-[30px] h-[30px] mx-2"
                />
              </div>
            )}
          </div>
          <ul className="text-left">
            {text &&
              text.map((item, index) => (
                <li
                  className="lg:text-lg break-keep  max-h-[50px] overflow-hidden"
                  key={item}
                >
                  <span className="tracking-tight">{item}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </SkillLi>
  );
};

const SkillLi = styled.li<{ value: boolean }>`
  border-radius: 15px;
  padding: 25px;
  background-color: transparent;
  overflow: hidden;
  cursor: pointer;
  transition: flex-grow 0.7s ease, background-color 1.1s ease, opacity 1.1s ease;
  @media (max-width: 768px) {
    grid-column: ${(props) => (props.value ? "span 2" : "span 1")};
  }

  @media (max-width: 480px) {
    grid-column: span 1;
  }

  .image-container {
    width: 150px; /* Adjust as needed */
  }

  #detail {
    display: none;
    height: 50px;
    opacity: 0;
    transition: opacity 0.5s ease, height 0.5s ease;
    overflow: hidden;
  }

  &:hover {
    width: 100%;
    background-color: rgba(239, 239, 239, 0.9);
    #detail {
      display: block;
      height: auto;
      opacity: 1;
    }
  }
  /* #detail {
    width: 0px;
    height: 0px;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  &:hover {
    flex-grow: 3;
    background-color: rgba(239, 239, 239, 0.9);
    #detail {
      width: 100%;
      height: 100%;
      
      opacity: 1;
    }
  } */
  /* ${(props) =>
    props.value &&
    `
    flex-grow: 3;
    background-color: rgba(239, 239, 239, 0.9);
    #detail {
      display: block;
    }
  `} */
`;
// poppins
