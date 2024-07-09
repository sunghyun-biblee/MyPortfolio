import React from "react";
import { ClassHubData as Data } from "data/ProjectDetailDatas/ClassHub";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MarkDown } from "components/markdown/MarkDown";
import { ListToggleBox } from "components/Toggle/ListToggleBox";
export const ClassHubComponent = () => {
  const nav = useNavigate();

  const handleCloseModal = () => {
    document.body.style.overflowY = "auto";

    return nav("/");
  };
  return (
    <DetailContainer
      className="fixed top-0 w-[100vw] bg-transparent backdrop-blur-md p-9
   left-0
   z-20 max-h-[100vh] overflow-scroll font-pretendard
    "
    >
      <section className="  lg:mx-[5vw] bg-[white] flex flex-col items-center">
        <DetailFirst>
          <h1 className="text-4xl pt-10 uppercase font-bold text-[#efefef]">
            {Data.title}
          </h1>
          <p className="flex justify-center py-5 text-sm text-[#efefef]">
            <span className="mr-5">{Data.date}</span>
            <span>{`${Data.personnel[2]}인 (프론트엔드 ${Data.personnel[0]}명, 백엔드 ${Data.personnel[1]}명)`}</span>
          </p>
          <img
            src={Data.mainImage}
            alt="mainImage"
            className="w-[calc(100vw-60vw)] h-[100%]"
          />
          <div className="pt-6 max-w-[750px]">
            <MarkDown>{Data.summary}</MarkDown>
            {/* <p>{Data.summary}</p> */}

            <p className="whitespace-pre-wrap pt-5 ">{Data.background}</p>
          </div>
        </DetailFirst>
        <DetailSecond className="px-12 pb-6">
          <ListContainer className="border-t-[1px] pt-10">
            <ListName>✨ 핵심 기능 및 특징</ListName>
            <ItemList>
              {Data.mainFuntion.map((item, index) => (
                <Item key={item + index}>
                  <span className="block ml-2 mr-2 text-blue-500 font-bold">
                    ✔
                  </span>
                  <span>{item}</span>
                </Item>
              ))}
            </ItemList>
          </ListContainer>
          <ListContainer>
            <ListName>🛠️ 사용 기술 스택</ListName>
            <ItemList className="ml-2">
              {Data.skills.map((item, index) => (
                <Item key={item.description + index}>
                  <ListToggleBox
                    name={item.name}
                    description={item.description}
                    category="skill"
                  ></ListToggleBox>
                </Item>
              ))}
            </ItemList>
          </ListContainer>
          <ListContainer>
            <ListName>✍ 프로젝트 기여도</ListName>
            <ItemList>
              {Data.myActivities.map((item, index) => (
                <Item>
                  <ListToggleBox
                    category="myActivities"
                    title={item.title}
                    description={item.description}
                  />
                </Item>
              ))}
            </ItemList>
          </ListContainer>
          <ListContainer>
            <ListName>트러블 슈팅</ListName>
            <ItemList>
              {Data.troubleShooting.map((item, index) => (
                <Item>
                  <ListToggleBox
                    category="trouble"
                    title={item.title}
                    trouble={item.trouble}
                    Resolution={item.Resolution}
                    search={item.serach}
                    myThink={item.myThink}
                  ></ListToggleBox>
                </Item>
              ))}
            </ItemList>
          </ListContainer>
        </DetailSecond>
        <button onClick={handleCloseModal}>닫기</button>
      </section>
    </DetailContainer>
  );
};

const DetailContainer = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ItemList = styled.ul`
  width: 100%;
`;
const Item = styled.li`
  display: flex;
  width: 100%;
  padding-bottom: 0.5rem;
`;
const ListName = styled.h2`
  font-size: 1.25rem;
  line-height: 1.75rem;
  text-align: left;
  padding-bottom: 0.75rem;
  font-weight: 700;
`;

const ListContainer = styled.div`
  width: 70%;
  margin-top: 1rem;
`;
const DetailFirst = styled.article`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1.25rem;
  width: 100%;
  z-index: 1;
  &::before {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    height: 55%;
    width: 100%;
    content: " ";
    background-color: #5ea3ec;
  }
`;
const DetailSecond = styled.article`
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2.5rem;
`;
