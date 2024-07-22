import { useScrollSpin } from "hooks/useScrollSpin";

import styled from "styled-components";

type ISkillItem = {
  item: {
    title: string;
    text: string[];
  };
};

export const SkillItem = ({ item }: ISkillItem) => {
  const animateObserve = useScrollSpin(1, 0);

  if (!item) {
    return <div>로딩중</div>;
  }
  return (
    <Article
      className="shadow-xl rounded-3xl relative border-4 border-[#005B43] bg-[#E7FFF4]/95

      "
      {...animateObserve}
    >
      <h1 className="font-extrabold font-pretendard absolute bg-[#a0e5d0] -top-8 -left-5 px-3 py-2 border-4 lg:text-3xl mysm:text-xl border-[#005B43] transform -rotate-[11deg]">
        {item.title}
      </h1>
      <ul className="text-left lg:px-4 mysm:px-3 my-10">
        {item.text.map((item, index) => (
          <li
            className="py-2 font-bold tracking-tight"
            key={item + new Date().getTime() + index}
          >
            {item}
          </li>
        ))}
      </ul>
    </Article>
  );
};

const Article = styled.article`
  backface-visibility: hidden;
`;
