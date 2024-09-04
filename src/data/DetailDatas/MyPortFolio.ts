import MainImg from "assets/img/MyPortfolio/mainpage2.jpg";
import MainImgFront from "assets/img/MyPortfolio/Loot.jpg";
import AboutMe from "assets/img/MyPortfolio/AboutMe.jpg";
import skillImg from "assets/img/MyPortfolio/SkillPart2.png";
import ProjectPart from "assets/img/MyPortfolio/ProjectPart.jpg";
import PorjectDetailPart from "assets/img/MyPortfolio/ProjectDetail.jpg";
export const MyPortfolioData = {
  id: "My",
  title: "MyPortfolio",
  colorConcept: "#5ea3ec",
  mainImage: MainImg,
  personnel: [1],
  date: "2024.06.04 ~ 2024.07",
  Contribution: "100%",
  role: "프론트엔드 담당",
  skills: [
    {
      name: "React",
      description: [
        "React는 컴포넌트 기반으로 동작하며, Virtual DOM을 활용하여 웹 애플리케이션의 성능을 최적화합니다.",
        "여러 React Hooks를 활용하여 스크롤 애니메이션에 적용될 커스텀 훅을 제작하고 재사용함으로써 custom hook을 이해할 수 있었습니다",
      ],
    },
    {
      name: "Typescript",
      description: [
        "TypeScript는 JavaScript의 슈퍼셋 언어로, 정적 타입을 지원하여 코드를 작성할 때 타입을 명시함으로써 오류를 사전에 확인할 수 있어 개발 과정의 안전성을 높여줍니다",
      ],
    },
    {
      name: "tailwindCSS",
      description: [
        "TailwindCSS는 클래스 기반 스타일링을 통해 일관된 디자인을 빠르게 구현할 수 있는 CSS 프레임워크입니다.",
        "특히, 반응형 웹 구현 가속화하기 좋으며 개발자의 피로도를 줄이는 장점이 있습니다",
      ],
    },
    {
      name: "styled-components",
      description: [
        "Styled Components는 JavaScript 코드 내에서 CSS를 작성할 수 있게 해주는 CSS-in-JS 라이브러리입니다. ",
        "컴포넌트와 스타일을 함께 정의하여 스타일을 관리하고 재사용할 수 있으며, props를 전달하여 조건부로 스타일을 다르게 적용할 수 있습니다.",
      ],
    },
  ],
  summary:
    "일반 문서형식이 아닌 웹사이트 형태로, 저만의 포트폴리오를 만들기 위해 제작하였습니다.",
  background:
    "해당 프로젝트는 웹 포트폴리오를 제작하면서, 사용했던 기술들을 복습하고자 진행하게되었습니다.\n 중점 기술은 ClassHub 프로젝트를 진행할때 사용했던 typescript와 tailwindCSS, \n그리고 매번 사용하고있지만 까먹지않기위해 styled-components를 선택하였습니다.",
  mainFuntion: [
    "초기화면의 FlipCard 제작",
    "스크롤 애니메이션 커스텀 훅",
    "프로젝트 자세히 보기를 모달창으로 구현",
    "자기소개, 기술스택, 프로젝트, 이력 순으로 배치",
  ],
  myActivities: [
    {
      title: "웹 표준/ 접근성 및 성능을 고려하여 작업",
      description: [
        "웹 페이지를 마크업할 때 div만 사용하기보다는 시맨틱 태그를 적극 활용하였습니다. 시맨틱 태그를 통해 가독성을 좋게 만들고, 검색 엔진 최적화 (SEO)부분에서 이점을 가져오게합니다.",
        "LightHouse를 참조하여, 초기화면 로딩 속도를 개선하기 위해 차세대 이미지 형식(webp)으로 변경하여 기존 FCP(0.9s), LCP(1.8s) → FCP(0.7s),LCP(1.3s) 로 개선 ",
      ],
    },
    {
      title: "React Hooks를 사용하여 스크롤 애니메이션에 적용된 커스텀 훅 구현",
      description: [
        "기존 각 컴포넌트마다 ref를 지정하고, 함수를 정의하여 애니메이션을 조작 하였으나,중복되는 코드들을 하나의 함수로 정의하여 재사용성을 높이고자 구현하게 됨",
        "오픈 소스를 찾아보며, Custom Hook을 작성하는 방법과 동작 방식을 이해하게 됨",
        "Custom Hook 내에서 useRef를 생성 및 함수를 생성하여 파라미터로 duration, delay, value를 통해 각각 다른 애니메이션을 적용 시킬 수 있도록 정의",
        "항상 같은 값을 전달 받게 되었을 시, 반복 호출을 최소화하기 위해 useCallback, useEffect를 사용",
        "IntersectionObserver를 통해 화면에 감지되면 애니메이션이 실행되는데, 컴포넌트마다 높이가 달라 애니메이션이 부자연스럽게 작동하게 됨 \n컴포넌트마다 화면 감지 영역을 지정할 수 있도록 threshold의 값 또한 파라미터로 전달 \n threshold의 경우 선택 옵션으로 값을 전달하지 않았을 때는 기본값을 적용",
        "return 값은 생성한 ref와 style 속성을 반환하도록 지정하고, 스프레드 연산자를 통해 컴포넌트의 props로 전달",
      ],
    },
    {
      title:
        "tailwindCSS와 styled-components를 결합하여, 초기화면 FlipCard를 제작",
      description: [
        "원하는 디자인의 FlipCard를 구현하기위해 backface-visibility 속성을 필요로 하였지만, 기존 tailwindCSS에는 클래스명으로 backface-visibility 속성을 지원하지 않음 \n tailwind로 적용하기 위해서는 추가 Tailwind 3dTrasnform Plugin 라이브러리를 설치해야 함",
        "사용 중이던 styled-components와 결합하여 컴포넌트 시켜, backface-visibility 속성을 명시하고, 클릭 상태를 props로 전달하여 카드를 뒤집는 동적 스타일링을 적용",
      ],
    },
    {
      title: "react-router-dom을 통한 중첩 라우팅으로 모달 창 구현",
      description: [
        "useState를 통해서도 모달창을 구현할 수 있었으나, URL이 변경되지 않아 뒤로 가기 기능을 이용할 수 없기 때문에 react-router-dom 을 통해 모달창을 구현",
        "path=”/” 인 Route 내부에 path=”/:ProjectId” 라우터를 작성하여 기존 페이지 위에 컴포넌트가 렌더링 되도록 중첩 라우팅",
        "모달 창 상단에는 <Dot /> 컴포넌트를 리스트형태로 출력하여 클릭 시 다른 프로젝트로 이동할 수 있도록 구현",
      ],
    },
  ],
  experience: [
    {
      title: "Custom Hook 및 props 전달 방식 이해도 상승",
      text: [
        "초기에 navigation 버튼 클릭 시 해당 구간으로 이동하는 스크롤 애니메이션을 컴포넌트 마다 작성",
        "매번 똑같이 사용되기 때문에 Custom Hook으로 제작하여 재사용성을 높이고,  값이 변경되지 않을 떄는 함수를 저장해둔 뒤 재사용하는 방식으로 최적화하는 `useCallback을 사용하면서 메모이제이션 개념`을 추가적으로 이해할 수 있었습니다. ",
        "기존에는 `Custom Hook` 을 자주 사용되는 함수 ( 데이터 패칭 함수 ) 들을 정의하였다면, 이번에 스크롤 애니메이션 훅을 제작하게 되면서, Custom Hook은 React Hook을 활용하여 재사용성을 높이는 함수라는 것을 알게 되었으며, 이해도를 높일 수 있었습니다.",
        "return 값을 스프레드 연산자를 통해 props로 전달할 수 있다는 방법을 알 수 있었습니다.",
      ],
    },
    {
      title: "웹 성능 및 최적화 ",
      text: [
        "지금까지 프로젝트를 진행할 때는 컴포넌트를 설계하고, 기능을 구현하는데 집중을 했었습니다.",
        "프로젝트의 크기가 점점 커지면서, 애플리케이션이 점점 느려지는 현상을 느끼게 되었고, 이번 프로젝트에서도 초기 로딩 속도의 변화가 느껴졌으며, 사용된 이미지와 애니메이션이 많았기에 느려지는 것 같아, 성능과 최적화에 대해 찾아보게 되었습니다.",
        "기본적으로 Chrome에서 제공하는 LightHouse로 측정 결과 LCP 성능 부분에서 위험점수를 받게 되었고, 이부분은 이미지 최적화 부분에서 문제가 발생한다는 것을 알게되어, 이미지 형식을 차세대 Webp로 변경하며 개선할 수 있었습니다.",
      ],
    },
  ],
  troubleShooting: null,
  ProjectIMG: [
    { img: MainImgFront, imgDescrip: "초기화면 카드 앞면" },
    { img: MainImg, imgDescrip: "초기화면 카드 뒷면" },
    { img: AboutMe, imgDescrip: "자기 소개 화면" },
    { img: skillImg, imgDescrip: "스킬 소개 화면" },
    { img: ProjectPart, imgDescrip: "프로젝트 소개 화면" },
    { img: PorjectDetailPart, imgDescrip: "프로젝트 자세히보기 화면" },
  ],
  deploy: "bibleeportfolio.vercel.app/",
  github: "github.com/sunghyun-biblee/MyPortfolio",
  category: "개인 프로젝트",
};
