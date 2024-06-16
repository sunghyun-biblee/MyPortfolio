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
    <article className="bg-[#E2FEF0] p-12 mb-14 rounded-lg shadow-lg">
      <div className="mb-10 flex justify-between items-center lg:flex-row mysm:flex-col">
        <h1 className="text-5xl uppercase font-extrabold">TRIP FIXED</h1>
        <span className="text-2xl text-gray-600/80 font-semibold">
          2024.03~2024.05
        </span>
      </div>
      <div
        className="flex gap-5 lg:flex-nowrap mysm:flex-wrap justify-center
    "
      >
        <div className="lg:w-[47%] mysm:w-[90%] lg:mr-[3%]">
          {/* {item.projectImg?.map((item) => (
          <img src={item} alt="프로젝트 이미지" />
        ))} */}
          <div className="flex flex-col items-center  ">
            <img
              src={preview}
              alt="프로젝트 이미지"
              className="w-[97%] mx-[3%] rounded-lg shadow-xl"
            />
            <div className="flex justify-center items-center p-2 border-2 mt-5 rounded-lg shadow-lg bg-[#efeee] border-black">
              <p className=" px-2 cursor-pointer">◀</p>
              <p className="tracking-wide  px-2 ">1 / 4</p>
              <p className=" px-2 cursor-pointer">▶</p>
            </div>
          </div>
        </div>
        <div className="lg:w-[50%] mysm:w-[100%] flex flex-col lg:mt-0 mysm:mt-5  justify-between">
          <p className="text-left font-semibold leading-relaxed tracking-wide  ">
            여행계획을 세우기 힘든 사람들을 위해 공공데이터 기반으로 여행지를
            추천해주는 서비스 입니다.
          </p>
          <ul className="pt-5 mt-5 border-t-2 border-gray-500 ">
            <li className="flex  py-2">
              <span className="inline-block w-36  text-left text-2xl font-extrabold uppercase tracking-wide mr-10">
                functions
              </span>
              <p className="flex flex-col w-[calc(100%-9rem)] text-right font-semibold">
                {/* {item.function.map((item) => (
                <li className="py-1 font-semibold">{item}&nbsp;</li>
              ))} */}
                {data.function.map((item, index) => {
                  if (data.function.length === index + 1) {
                    const text = item;
                    return text;
                  } else {
                    const text = item + ", ";
                    return text;
                  }
                })}
              </p>
            </li>
            <li className="flex justify-between py-2">
              <span className="inline-block w-36  text-left text-2xl font-extrabold tracking-wide uppercase mr-10">
                Skills
              </span>
              <p className="inline-block w-[calc(100%-9rem)] text-right font-semibold tracking-wide">
                {data.skills.map((item, index) => {
                  if (data.skills.length === index + 1) {
                    const text = item;
                    return text;
                  } else {
                    const text = item + ", ";
                    return text;
                  }
                })}
              </p>
            </li>
            <li className="flex justify-between py-2 items-center">
              <span className="inline-block w-36  text-left text-2xl font-extrabold tracking-wide uppercase mr-10">
                Github
              </span>
              <a
                href={`https://${data.github}.git`}
                className="w-[calc(100%-9rem)] text-blue-700 hover:underline text-right"
              >
                {data.github}
              </a>
            </li>
            {data.url && (
              <li className="flex justify-between py-2 items-center">
                <span className="inline-block w-36  text-left text-2xl font-extrabold uppercase mr-10">
                  url
                </span>
                <p className="w-[calc(100%-9rem)] text-blue-700 hover:underline text-right">
                  {data.url}
                </p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </article>
  );
};
