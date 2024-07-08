export const MyPortfolioData = {
  title: "MyPortfolio",
  colorConcept: "#5ea3ec",
  personnel: [1],
  date: "2024.05.01~ 2024.06.18",
  Contribution: "100%",
  role: "프론트엔드 담당",
  skills: [
    {
      name: "React",
      description:
        "React는 컴포넌트 기반으로 동작하며, Virtual DOM을 활용하여 웹 애플리케이션의 성능을 최적화합니다. 여러 React Hooks를 활용하여 스크롤 애니메이션에 적용될 커스텀 훅을 제작하고 재사용함으로써 custom hook을 이해할 수 있었습니다",
    },
    {
      name: "Typescript",
      description:
        "TypeScript는 JavaScript의 슈퍼셋 언어로, 정적 타입을 지원하여 코드를 작성할 때 타입을 명시함으로써 오류를 사전에 확인할 수 있어 개발 과정의 안전성을 높여줍니다",
    },
    {
      name: "tailwindCSS",
      description:
        "Tailwind는 CSS 프레임워크로, 클래스 기반 스타일링을 합니다. 일관된 디자인을 단시간에 쉽게 구현할 수 있습니다.",
    },
    {
      name: "styled-components",
      description:
        "Styled Components는 JavaScript 코드 내에서 CSS를 작성할 수 있게 해주는 CSS-in-JS 라이브러리입니다. 컴포넌트와 스타일을 함께 정의하여 스타일을 관리하고 재사용할 수 있습니다. 또한 props를 전달하여 조건부로 스타일을 다르게 적용할 수 있습니다.",
    },
  ],
  summary:
    "일반 문서형식이 아닌 웹사이트 형태로, 저만의 포트폴리오를 만들기 위해 제작하였습니다.",
  background:
    "해당 프로젝트는 웹 포트폴리오를 제작하면서, 사용했던 기술들을 복습하고자 진행하게되었습니다. 중점 기술은 ClassHub 프로젝트를 진행할때 사용했던 typescript와 tailwindCSS, 그리고 꾸준히 사용하고있지만 까먹지않기위해 styled-components를 선택하였습니다.",
  mainFuntion: [
    "초기화면의 FlipCard 제작",
    "스크롤 애니메이션 커스텀 훅",
    "프로젝트 자세히 보기를 모달창으로 구현",
    "자기소개, 기술스택, 프로젝트, 이력 순으로 배치",
  ],
  myActivities: [
    {
      title: "웹 표준/ 접근성 및 성능을 고려하여 작업",
      description:
        "웹 페이지를 마크업할 때 시맨틱태그를 적극 활용하여, 가독성을 좋게 만들고, 검색엔진최적화(SEO)부분에서 이점을 가져오게합니다.또한 lightHouse를 참조하여 초기화면 로딩속도 FCP(0.9s), LCP(1.8s)를 차세대 이미지형식(webp)으로 변경하여 FCP(0.7s),LCP(1.3s)로 줄였습니다 ",
    },
    {
      title: "React-Hooks를 사용하여 스크롤 애니메이션에 적용된 커스텀훅 구현",
      description:
        "React-Hooks 중 학습이 비교적 적은 useRef와 최적화를 위한 useCallback,useEffect를 사용하여 스크롤 애니메이션 효과를 구현하고, 여러 컴포넌트에 적용하기위해 custom hook으로 만들어 재사용합니다. ",
    },
    {
      title: "초기화면의 FlipCard 제작",
      description:
        "tailwindCSS와 styled-components를 사용하여 초기화면의 FlipCard를 제작하였습니다. 초기화면을 밋밋한 텍스트 보다는 애니메이션을 추가하여 카드형식으로 알리는 것도 괜찮을 것 같아 제작하였습니다.",
    },
    {
      title: "React-Router-Dom을 통한 중첩라우팅으로 모달창 구현",
      description:
        "useState를 활용하여 모달 창을 구현할 수도 있었지만, 중첩라우팅을 복습하기 위해 모달 창을 Route를 활용하여 제작해 보았습니다.",
    },
  ],
  troubleShooting: null,
  ProjectIMG: [],
};
