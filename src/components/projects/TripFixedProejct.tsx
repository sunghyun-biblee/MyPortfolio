import React from "react";
import preview from "assets/img/preview.jpg";

export const TripFixedProejct = () => {
  const data = {
    date: "2024.03~2024.05",
    projectImg: null,
    title: "trip fixed",
    skills: ["Javascript", "React", "styled-components", "firebase"],
    url: "",
    function: [
      "여행일자의 날씨정보 제공",
      "선택지역의 관광지 추천 및 정보 제공",
      "선택지역의 축제정보 제공",
      "선택지역의 숙소 정보 제공",
    ],
    github: "github.com/sunghyun-biblee/Trip_Fixied_Project",
    description:
      "여행계획을 세우기 힘든 사람들을 위해 공공데이터 기반으로 여행지를 추천해주는 서비스 입니다.",
  };
  return (
    <article className="bg-[#E2FEF0] py-10 px-16 mb-14 rounded-lg shadow-lg">
      <div className="mb-10 flex justify-between items-center lg:flex-row mysm:flex-col">
        <h1 className="text-5xl uppercase font-extrabold">TRIP FIXED</h1>
        <span className="text-2xl text-gray-600/80 font-semibold">
          2024.03~2024.05
        </span>
      </div>
      <div className="flex gap-5 lg:flex-row mysm:flex-col">
        <div className="lg:w-[50%] mysm:w-[100%] flex">
          {/* {item.projectImg?.map((item) => (
          <img src={item} alt="프로젝트 이미지" />
        ))} */}
          <img src={preview} alt="프로젝트 이미지" className=" h-[70%]" />
        </div>
        <div className="w-[50%] flex flex-col justify-between">
          <p>
            여행계획을 세우기 힘든 사람들을 위해 공공데이터 기반으로 여행지를
            추천해주는 서비스 입니다.
          </p>
          <ul>
            <li className="">
              <span className="w-[calc(100px-10px)] inline-block">
                주요 기능
              </span>
              <ul className="flex">
                {data.function.map((item) => (
                  <li>{item}&nbsp;</li>
                ))}
              </ul>
            </li>
            <li className="flex justify-between">
              <span>Skills</span>
              <ul className="flex">
                {data.skills.map((item) => (
                  <li>{item}&nbsp;</li>
                ))}
              </ul>
            </li>
            <li className="flex justify-between">
              <span>Github</span>
              <a href={`https://${data.github}.git`}>{data.github}</a>
            </li>
            {data.url && (
              <li>
                <span>url</span>
                <p>{data.url}</p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </article>
  );
};
