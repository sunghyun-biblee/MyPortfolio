import React from "react";
import { projectItemType } from "./Projects";
import preview from "assets/img/preview.jpg";
interface IprojectItem {
  item: projectItemType;
}
export const ProjectsItem = ({ item }: IprojectItem) => {
  return (
    <article className="bg-[#E2FEF0] p-12 mb-14 rounded-lg shadow-lg">
      <div className="mb-10 flex justify-between items-center lg:flex-row mysm:flex-col">
        <h1 className="text-5xl uppercase font-extrabold">{item.title}</h1>
        <span className="text-2xl text-gray-600/80 font-semibold">
          {item.date}
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
            {item.description + item.description}
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
                {item.function.map((data, index) => {
                  if (item.function.length === index + 1) {
                    const text = data;
                    return text;
                  } else {
                    const text = data + ", ";
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
                {item.skills.map((data, index) => {
                  if (item.skills.length === index + 1) {
                    const text = data;
                    return text;
                  } else {
                    const text = data + ", ";
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
                href={`https://${item.github}.git`}
                className="w-[calc(100%-9rem)] text-blue-700 hover:underline text-right"
              >
                {item.github}
              </a>
            </li>
            {item.url && (
              <li className="flex justify-between py-2 items-center">
                <span className="inline-block w-36  text-left text-2xl font-extrabold uppercase mr-10">
                  url
                </span>
                <p className="w-[calc(100%-9rem)] text-blue-700 hover:underline text-right">
                  {item.url}
                </p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </article>
  );
};
