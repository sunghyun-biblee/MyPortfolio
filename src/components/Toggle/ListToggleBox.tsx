import React, { useState } from "react";
import { MarkDown } from "components/markdown/MarkDown";
import styled from "styled-components";

interface IToogleProps {
  name?: string;
  description?: string;
  title?: string;
  trouble?: string;
  Resolution?: string;
  search?: string;
  myThink?: string;
  category: string;
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
              className="flex items-center bg-gray-200 p-1"
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
              <p className="pl-1 py-2 whitespace-pre-wrap">{description}</p>
            )}
          </div>
        );
      case "myActivities":
        return (
          <div className="flex flex-col text-left p-1 mb-1">
            <span className="p-1 mb-2 text-black bg-gray-200 w-[100%]">
              {title}
            </span>
            <div
              className="relative before:absolute 
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
            </div>
          </div>
        );
      case "trouble":
        return (
          <TroubleShootingBox className="flex flex-col text-left p-1 mb-1">
            <span className="p-1 mb-2 text-black bg-gray-200 w-[100%]">
              {title}
            </span>

            <MarkDown>{trouble}</MarkDown>

            {search && (
              <>
                <hr />
                <MarkDown>{search}</MarkDown>
              </>
            )}
            <hr />
            <MarkDown>{Resolution}</MarkDown>
            {myThink && (
              <>
                <hr />
                <MarkDown>{myThink}</MarkDown>
              </>
            )}
          </TroubleShootingBox>
        );
      default:
        break;
    }
  };
  return <div className="w-[100%]">{renderItem(category)}</div>;
};

const TroubleShootingBox = styled.div`
  p {
    padding: 8px 0px;
  }
`;
