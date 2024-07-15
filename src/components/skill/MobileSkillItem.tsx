import React from "react";

type SkillItemProps = {
  title: string;
  icon?: string;
  text?: string[];
  PlusSkillIcon?: string | null;
  index: number;
};
export const MobileSkillItem = ({
  title,
  icon,
  PlusSkillIcon,
  index,
  text,
}: SkillItemProps) => {
  return (
    <li className="md:p-5 mysm:p-3 rounded-xl bg-white/90 w-[100%] md:text-base mysm:text-sm">
      <div className={`flex  w-[100%] h-[100%]  ${"justify-start"} `}>
        <div className="image-container ">
          <img
            src={icon}
            alt="skillIcon"
            className="object-cover md:min-w-[150px] mysm:max-w-[50px] max-h-[150px]"
          />
        </div>
        <div id="detail" className="md:pl-6 mysm:pl-3 h-full w-[100%]">
          <div className="flex justify-between items-center md:pb-3 mysm:pb-2">
            <span className="inline-block text-3xl">{title}</span>
            {PlusSkillIcon && (
              <div className="flex items-center max-h-[50px]">
                <span className="md:text-base mysm:text-xs">
                  라이브러리 및 프레임워크
                </span>
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
                  className="lg:text-lg break-keep   overflow-hidden"
                  key={item}
                >
                  <span className="tracking-tight">{item}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </li>
  );
};
