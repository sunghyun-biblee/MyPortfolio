import { MarkDown } from "components/markdown/MarkDown";
import { ThroubleTryType } from "components/ProjectDetail/ProjectDetail";
import { useState } from "react";
import Markdown from "react-markdown";
import styled from "styled-components";

const MarkDwWrapper = styled.div`
  p {
    padding: 0.5rem 0rem 0.5rem 0.25rem;
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
  description?: string;
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
              <span>{name}</span>
            </div>
            {isToggle && (
              <MarkDwWrapper>
                <Markdown>{description}</Markdown>
              </MarkDwWrapper>
            )}
          </div>
        );
      case "myActivities":
        return (
          <div className="flex flex-col text-left p-1 mb-1">
            <span className="p-1 mb-2 text-black bg-gray-200 w-[100%] break-keep">
              {title}
            </span>
            <MarkDwWrapper
              className="relative before:absolute last:break-keep last:whitespace-pre-wrap 
              ml-1
          last:pl-4
  before:w-2 
  before:h-2 
  before:bg-[#3b82f6] 
  before:block 
  before:rounded-full 
  before:left-0 
  before:top-[0.5rem]"
            >
              <MarkDown>{description}</MarkDown>
            </MarkDwWrapper>
          </div>
        );
      case "trouble":
        return (
          <TroubleShootingBox className="flex flex-col text-left p-1 mb-1">
            <span className="p-1 mb-2 text-black bg-gray-200 w-[100%]">
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
              <>
                <hr />
                <MarkDwWrapper>
                  <MarkDown>{search}</MarkDown>
                </MarkDwWrapper>
              </>
            )}
            <hr />
            <MarkDwWrapper>
              <MarkDown>{Resolution}</MarkDown>
            </MarkDwWrapper>
            {tryResult && (
              <MarkDwWrapper>
                <hr />
                <strong className="mt-2 inline-block px-1">
                  {tryResult.text}
                </strong>
                <ol className="px-1">
                  {tryResult.trylist.map((item, index) => (
                    <li className="flex" key={item}>
                      <span className=" pt-2 inline-block text-blue-400">
                        ✔
                      </span>
                      <MarkDown>{item}</MarkDown>
                    </li>
                  ))}
                </ol>
              </MarkDwWrapper>
            )}
            {myThink && (
              <>
                <hr />
                <MarkDwWrapper>
                  <MarkDown>{myThink}</MarkDown>
                </MarkDwWrapper>
              </>
            )}
          </TroubleShootingBox>
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
