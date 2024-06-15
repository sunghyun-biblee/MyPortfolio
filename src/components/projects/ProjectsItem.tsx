import React from "react";
import { projectItemType } from "./Projects";
import preview from "assets/img/preview.jpg";
interface IprojectItem {
  item: projectItemType;
}
export const ProjectsItem = ({ item }: IprojectItem) => {
  return (
    <article className="bg-[#E2FEF0] py-10 px-16 mb-14 rounded-lg shadow-lg">
      <div className="mb-10 flex justify-between items-center lg:flex-row mysm:flex-col">
        <h1 className="text-5xl uppercase font-extrabold">{item.title}</h1>
        <span className="text-2xl text-gray-600/80 font-semibold">
          {item.date}
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
          <p>{item.description}</p>
          <ul>
            <li className="flex justify-between">
              <span>주요 기능</span>
              <ul className="flex">
                {item.function.map((item) => (
                  <li>{item}&nbsp;</li>
                ))}
              </ul>
            </li>
            <li className="flex justify-between">
              <span>Skills</span>
              <ul className="flex">
                {/* {item.skills.map((item) => (
                  <li>{item}&nbsp;</li>
                ))} */}
              </ul>
            </li>
            <li className="flex justify-between">
              <span>Github</span>
              <a href={`https://${item.github}.git`}>{item.github}</a>
            </li>
            {item.url && (
              <li>
                <span>url</span>
                <p>{item.url}</p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </article>
  );
};
