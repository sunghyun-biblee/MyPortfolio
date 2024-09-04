import { MarkDown } from "components/markdown/MarkDown";
import { ThroubleTryType } from "components/ProjectDetail/ProjectDetail";
import { useState } from "react";
import Markdown from "react-markdown";
import styled from "styled-components";

const MarkDwWrapper = styled.div`
  p,
  span {
    white-space: pre-wrap;
    word-break: keep-all;
  }

  code {
    padding: 0.2rem 0.4rem;
    margin-right: 0.1rem;
    border-radius: 4px;
    background-color: rgb(233, 236, 239);
    font-size: 0.9rem;
    font-family: Pretendard;
  }
`;

interface IToogleProps {
  name?: string;
  description?: string[];
  title?: string;
  trouble?: string;
  Resolution?: string;
  search?: string | null;
  myThink?: string | null;
  tryResult?: ThroubleTryType | null;
  tryProp?: ThroubleTryType | null;
  category: string;
  img?: string;
  imgDescrip?: string;
  text?: string[];
  result?: string[];
}
export const ListToggleBox = ({
  name,
  description,
  title,
  trouble,
  Resolution,
  search,
  myThink,
  category,
  img,
  imgDescrip,
  tryProp,
  tryResult,
  text,
  result,
}: IToogleProps) => {
  const [isToggle, setIsToggle] = useState<boolean>(false);

  const handleToggleClick = () => {
    setIsToggle((prev) => !prev);
  };
  const renderItem = (category: string) => {
    switch (category) {
      case "skill":
        return (
          <div className="flex flex-col text-left">
            <div
              className="flex items-center bg-gray-200 p-1 cursor-pointer"
              onClick={handleToggleClick}
            >
              <span
                className={`${
                  isToggle ? "rotate-90" : "rotate-0"
                } block transition-transform text-sm mr-1`}
              >
                ▶
              </span>
              <span className="text-lg">{name}</span>
            </div>
            {isToggle && (
              <MarkDwWrapper>
                <ul className="list-inside pl-1">
                  {description?.map((item) => (
                    <li className="list-disc py-1" key={item}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {/* <Markdown>{description}</Markdown> */}
              </MarkDwWrapper>
            )}
          </div>
        );
      case "myActivities":
        return (
          <div className="flex flex-col text-left p-1 mb-1">
            <span className="p-1 mb-2 text-black bg-gray-200 w-[100%] break-keep font-medium text-lg">
              {title}
            </span>
            <MarkDwWrapper className="relative before:absolute last:break-keep last:whitespace-pre-wrap last:pl-2">
              <ol className="">
                {description?.map((item, index) => (
                  <li className="py-1 flex " key={item}>
                    <span className="inline-block mr-1">{index + 1}.</span>{" "}
                    <Markdown>{item}</Markdown>
                  </li>
                ))}
              </ol>
            </MarkDwWrapper>
          </div>
        );
      case "trouble":
        return (
          <TroubleShootingBox className="flex flex-col text-left p-1 mb-1">
            <span className="p-1 mb-2 text-black bg-gray-200 w-[100%] font-medium">
              {title}
            </span>
            <MarkDwWrapper>
              <MarkDown>{trouble}</MarkDown>
            </MarkDwWrapper>
            {tryProp && (
              <MarkDwWrapper>
                <hr />
                <strong className="mt-2 inline-block px-1">
                  {tryProp.text}
                </strong>
                <ol className="px-1">
                  {tryProp.trylist.map((item, index) => (
                    <li className="flex" key={item}>
                      <span className=" pt-2 inline-block">{index + 1}.</span>
                      <MarkDown>{item}</MarkDown>
                    </li>
                  ))}
                </ol>
              </MarkDwWrapper>
            )}
            {search && (
              <MarkDwWrapper>
                <hr />
                <MarkDown>{search}</MarkDown>
              </MarkDwWrapper>
            )}

            {Resolution && (
              <MarkDwWrapper>
                <hr />
                <MarkDown>{Resolution}</MarkDown>
              </MarkDwWrapper>
            )}
            {tryResult && (
              <MarkDwWrapper>
                <hr />
                <strong className="mt-2 inline-block px-1">
                  {tryResult.text}
                </strong>
                <ol>
                  {tryResult.trylist.map((item, index) => (
                    <li className="flex" key={item}>
                      <MarkDown>{item}</MarkDown>
                    </li>
                  ))}
                </ol>
              </MarkDwWrapper>
            )}
            {result && (
              <MarkDwWrapper>
                <hr />
                {result.map((item) => (
                  <MarkDown key={item}>{item}</MarkDown>
                ))}
              </MarkDwWrapper>
            )}
            {myThink && (
              <MarkDwWrapper>
                <hr />
                <MarkDown>{myThink}</MarkDown>
              </MarkDwWrapper>
            )}
          </TroubleShootingBox>
        );
      case "experience":
        return (
          <div className="flex flex-col text-left p-1 mb-1">
            <span className="p-1 mb-2 text-black bg-gray-200 w-[100%] break-keep font-medium text-lg">
              {title}
            </span>
            <MarkDwWrapper className="relative before:absolute last:break-keep last:whitespace-pre-wrap last:pl-2">
              <ol className="">
                {text?.map((item, index) => (
                  <li
                    className="py-1 flex items-start before:content-['▪'] before:mr-1"
                    key={item}
                  >
                    <Markdown>{item}</Markdown>
                  </li>
                ))}
              </ol>
            </MarkDwWrapper>
          </div>
        );
      case "projectScreen":
        return (
          <ProjectScreenBox>
            <div className="w-[100%] h-[100%]">
              <img src={img} alt="projectIMG" className="w-[100%] h-[100%]" />
            </div>
            <span className="pt-1">{imgDescrip}</span>
          </ProjectScreenBox>
        );
      default:
        break;
    }
  };
  return <div className="w-[100%]">{renderItem(category)}</div>;
};

const TroubleShootingBox = styled.div`
  p {
    padding: 8px 4px;
    word-break: keep-all;
  }
`;

const ProjectScreenBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
