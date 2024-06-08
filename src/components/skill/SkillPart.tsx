import { ScrollMoveType } from "components/projects/Projects";
import React, { forwardRef } from "react";
import styled from "styled-components";

const skillArray = [
  "React",
  "Javascript",
  "Typescript",
  "React-Query",
  "TailwindCSS",
];
interface ISkill {
  value: ScrollMoveType;
}
export const SkillPart = ({ value }: ISkill) => {
  return (
    <div
      className=" min-h-[100vh] w-[100%] flex justify-center
       bg-gradient-to-b to-[#96EBA0] from-[#20DABF] 
    "
      ref={value.element}
    >
      <div
        className="max-w-[1200px] flex flex-col justify-center w-[100vw]
      px-3"
      >
        <h1
          className="text-left lg:text-6xl md:text-6xl mysm:text-[40px] md:pb-7 mysm:pb-5 text-[#181f1b] font-extrabold
        [text-shadow:_5px_3px_3px_#3d9ca4]"
        >
          Skill Stack
        </h1>
        <ul className="md:flex md:flex-row pb-[100px] lg:px-2 md:px-1 mysm:grid mysm:grid-cols-3 md:gap-0 mysm:gap-3">
          {skillArray.map((item) => (
            <Li className="px-3 py-[5px] shadow-lg  lg:mr-5 md:mr-2 lg:text-[22px]">
              <span>{item}</span>
            </Li>
          ))}
          <Li className="px-3 py-[5px] shadow-lg lg:text-[22px] md:text-base ">
            <span className="mysm:hidden md:block">styled-components</span>
            <span className="mysm:block md:hidden">styled</span>
          </Li>
        </ul>
        <section
          className="md:grid md:grid-cols-2 md:gap-y-20 md:gap-x-10 mysm:flex mysm:flex-col gap-16
        mysm:px-4
        "
        >
          <article
            className="shadow-xl rounded-3xl relative border-4 border-[#005B43] bg-[#E7FFF4]/95
          "
          >
            <h1 className="font-extrabold absolute bg-[#a0e5d0] -top-8 -left-5 px-3 py-2 border-4 lg:text-3xl border-[#005B43] transform -rotate-12">
              Javascript
            </h1>
            <ul className="text-left px-3 my-10">
              <li className="py-2 font-bold tracking-tight">
                ES6 문법에 익숙합니다
              </li>
              <li className="py-2 font-bold tracking-tight">
                Javascript 주요 개념을 인지하고 있습니다
              </li>
              <li className="py-2 font-bold tracking-tight">
                typescript를 사용 경험이 있습니다
              </li>
              <li className="py-2 font-bold tracking-tight">
                가독성이 좋은 코드 및 클린코드를 만들려고 노력합니다
              </li>
            </ul>
          </article>

          <article className="shadow-xl rounded-3xl relative border-4 border-[#005B43] bg-[#E7FFF4]/95">
            <h1 className="font-extrabold absolute bg-[#a0e5d0] -top-8 -left-5 px-3 py-2 border-4 border-[#005B43] lg:text-3xl transform -rotate-12 ">
              React
            </h1>
            <ul className="text-left px-3 my-10">
              <li className="py-2 font-bold tracking-tight">
                React의 작동원리와 라이프사이클을 이해하고 있습니다.
              </li>
              <li className="py-2 font-bold tracking-tight">
                styled-component ,React-Query,React-router-Dom 활용할 수
                있습니다
              </li>
              <li className="py-2 font-bold tracking-tight">
                테스트 관련 라이브러리의 필요성을 느끼고 학습중 입니다
              </li>
              <li className="py-2 font-bold tracking-tight">
                재사용 가능한 컴포넌트를 설계하기위해 노력합니다
              </li>
            </ul>
          </article>
          <article className="shadow-xl rounded-3xl relative border-4 border-[#005B43] bg-[#E7FFF4]/95 ">
            <h1 className="font-extrabold absolute bg-[#a0e5d0] -top-8 -left-5 px-3 py-2 border-4 lg:text-3xl border-[#005B43] transform -rotate-12">
              HTML/CSS
            </h1>
            <ul className="text-left px-3 my-10">
              <li className="py-3 font-bold tracking-tight">
                웹 표준을 지킬려고 노력합니다
              </li>
              <li className="py-3 font-bold tracking-tight">
                div 사용을 줄이며, 시멘틱태그를 이용하여 마크업 합니다
              </li>
              <li className="py-3 font-bold tracking-tight">
                Keyfram을 활용한 애니메이션을 사용할 수 있습니다
              </li>
              <li className="py-3 font-bold tracking-tight">
                styled-component,tailwindCSS 를 사용할 수 있습니다
              </li>
              <li className="py-3 font-bold tracking-tight">
                framer_motion을 사용한 경험이 있습니다
              </li>
              <li className="py-3 font-bold tracking-tight">
                크로스 브라우징을 고려합니다
              </li>
            </ul>
          </article>
          <article className="shadow-xl rounded-3xl relative border-4 border-[#005B43] bg-[#E7FFF4]/95">
            <h1 className="font-extrabold absolute bg-[#a0e5d0] -top-8 -left-5 px-3 py-2 border-4 lg:text-3xl border-[#005B43] transform -rotate-12">
              TOOL
            </h1>
            <ul className="text-left px-3 mt-10">
              <li className="py-2 font-bold flex flex-col border-b-[1px] border-[#181F1B] border-dashed ">
                <span className="text-lg text-gray-700">GitHub</span>
                <span className="py-1">
                  commit,push,clone,pull을 사용하여 레파지토리를 관리합니다
                </span>
              </li>
              <li className="py-2 font-bold flex flex-col border-b-[1px] border-[#181F1B] border-dashed">
                <span className="text-orange-700 text-lg">Postman</span>
                <span className="py-1">
                  get,post,delete 요청을 하여 응답하는지 확인하고 디버깅할 수
                  있습니다
                </span>
              </li>
              <li className="py-2 font-bold flex flex-col border-b-[1px] border-[#181F1B] border-dashed">
                <span className="text-blue-800 text-lg">vscode</span>
                <span className="py-1">
                  주로사용하는 IDE툴이며, 코드작성에 편리한 확장프로그램들을
                  추가하여 사용합니다
                </span>
              </li>
            </ul>
          </article>
          {/* <article className="px-2">
            <ul>
              <h2 className="text-left lg:text-3xl">Front-End</h2>

              <li>
                JavaScript
                <span>
                  주요 개념을 인지하고, 가독성이 좋은코드 및 클린코드를 만들려고
                  노력합니다. ES6 문법이 익숙하진 않지만, 추후 webpack과 babel과
                  같은 라이브러리를 배워볼 예정입니다
                </span>
              </li>
              <li>
                React
                <span>
                  React의 작동원리와 특징을 이해하고 있으며, class컴포넌트의
                  구조를 알고는 있으나, 실 사용할때에는 function 컴포넌트를
                  사용합니다.
                </span>
                <span>
                  라이브러리의 경우 styled-component와
                  react-qeury(TanstackQuery),react-router-dom 등을 사용해본
                  경험이 있습니다.
                </span>
                <span>
                  테스트 관련 라이브러리는 최근에 알게되어 사용해본 적이 없으나,
                  Restful API를 사용한 프로젝트를 진행하고 나서 필요성을 느끼고
                  추후 배워볼 예정입니다.
                </span>
              </li>
              <li>
                TypeScript
                <span>
                  Javascript를 사용하여 프로젝트를 구현했을 당시 이해 하지
                  못했던 오류들이 바로 Type 명시가 제대로 되어있지 않다는 것을
                  깨닳았고
                </span>
                <span>
                  추후 Typescript를 사용하여 프로젝트를 진행해보니 코드 안전성과
                  디버깅 및 유지보수 하기에 뛰어다는 것을 느끼고 현재 주로
                  사용하고 있습니다
                </span>
                <span>
                  React와 더불어 사용하니 단점보다는 장점이 더 명확한 언어라고
                  느꼈습니다
                </span>
              </li>
              <li>
                TailwindsCSS
                <span>
                  단축 class명을 사용하여 빠르고 간편하게 퍼블리싱 하고, 반응형
                  웹을 구현할 때 주로 사용합니다
                </span>
              </li>
              <li>
                html/css
                <span>
                  웹 표준을 지킬려고 노력하며, div 사용을 줄이며, 최대한
                  시멘틱태그를 이용하여 마크업합니다
                </span>
              </li>
            </ul>
            <ul>
              <h2>ETC</h2>
              <li>
                git
                <span>
                  git 명령어 commit,push,clone,pull 을 사용하여 레파지토리를
                  관리한 경험이 있습니다
                </span>
              </li>
              <li>
                vscode
                <span>
                  주로 사용하는 IDE툴이며, 코드작성에 편리한 확장프로그램들을
                  추가하여 사용합니다
                </span>
              </li>
              <li>
                postman
                <span>
                  postman을 사용하여 get,post,put,delete 요청을 보내어 잘
                  응답하는지 확인해볼 수 있습니다
                </span>
              </li>
            </ul>
          </article> */}
        </section>
      </div>
    </div>
  );
};

const Li = styled.li`
  background-color: #cef3ec;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #151d18;
  font-family: sans-serif;
  font-weight: 600;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;
