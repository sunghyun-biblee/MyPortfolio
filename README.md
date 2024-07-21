# Portfolio _ 개인 포트폴리오

<img src="https://github.com/user-attachments/assets/75a0ce96-af9d-4a3e-b0b1-0585408c0f2a" width="200px">
<br/>
배포링크 : https://bibleeportfolio.vercel.app/

<br/>

> ## ✍ 사용된 기술 스택

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black" height="25px"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white" height="25px"> <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white" height="25px"> <img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white" height="25px"/>


<hr/>

> ## 프로젝트 소개

일반 문서형식이 아닌 웹사이트 형태로, 저만의 포트폴리오를 만들기위해 제작하게 되었습니다

웹 포트폴리오를 제작하면서, 사용했던 기술들을 복습하고자, 진행하게되었습니다
중점 기술은 ClassHub 프로젝트를 진행할때 사용했던 `Typescript` 와 `tailwindCSS` 
그리고 자주 사용하고있지만 까먹지 않기위해 `styled-components`를 선택하였습니다

<br/>

> ## ✨ 프로젝트 핵심 기능
1. 초기화면의 FlipCard 제작
2. 스크롤 애니메이션에 적용할 커스텀 훅 구현
3. 프로젝트 자세히 보기를 `react-router-dom`을 활용하여 모달창으로 구현
4. 자기소개, 기술스택, 프로젝트, 활동이력 순으로 배치

<br/>

> ##  ⭐ 프로젝트 기여도

1. **웹 표준/ 접근성 및 성능을 고려하여 작업**
    - 웹 페이지를 마크업할 때 div만 사용하기보다, 시맨틱 태그를 적극 활용하였습니다. 시맨틱 태그를 사용하면 가독성을 좋게만들고 , 검색엔진최적화 (SEO)부분에서 이점을 가져오게합니다.
    - 또한 LightHouse를 참조하여, 초기화면 로딩속도를 차세대 이미지 형식(webp)으로 변경하여 기존 **FCP(0.9s), LCP(1.8s)** ->  **FCP(0.7s),LCP(1.3s)**로 줄였습니다
2. **React-Hooks를 사용하여 스크롤 애니메이션에 적용된 커스텀훅 구현**
    - React-Hooks 중 학습과 이해도가 비교적 적은 useRef와 최적화를 위한 useCallback,useEffect를 사용하여 스크롤 애니메이션 효과를 구현하고, 여러컴포넌트에서 적용하기위해 custom hook으로 만들어 재사용했습니다
    - 이로인해 custom hook의 개념을 이해할 수 있었고, useCallback을 사용하는 이유에 대해서도 조금 알게되었습니다.
      
3. **초기화면의 FlipCard 제작**
    - tailwindCSS 와 styled-components를 사용하여 초기화면의 FlipCard를 제작하였습니다.
    - transition과 animation을 통해 ui 디자인하는 것을 좋아하는 저는, 밋밋한 텍스트보다는 애니메이션을 추가하여 카드형식으로 보여주는 것도 좋을 것같아 제작하였습니다.
4. **React-Router-Dom을 통한 중첩라우팅으로 모달창 구현**
    - useState를 활용하여 모달창을 구현할 수 도있었지만, 중첩라우팅을 복습하기 위해 모달창을 Route를 활용하여 제작해보았습니다.
