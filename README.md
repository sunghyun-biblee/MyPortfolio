# Portfolio _ 개인 포트폴리오

<img src="https://github.com/user-attachments/assets/75a0ce96-af9d-4a3e-b0b1-0585408c0f2a" width="200px">
<br/>
배포링크 : https://bibleeportfolio.vercel.app/

<br/>

> ## ✍ 사용된 기술 스택

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black" height="25px"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white" height="25px"> <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white" height="25px"> <img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white" height="25px"/>


<hr/>

> ## 프로젝트 소개

일반 문서 형식이 아닌 웹사이트 형태로, 저만의 포트폴리오를 만들기 위해 제작하게 되었습니다

웹 포트폴리오를 제작할 겸, 사용했던 기술들을 복습합니다.
중점 기술은 ClassHub 프로젝트를 진행할때 사용했던 `Typescript` 와 `tailwindCSS` 
그리고 자주 사용하고 있지만 까먹지 않기위해 `styled-components`를 선택하였습니다

<br/>

> ## ✨ 프로젝트 핵심 기능
1. 초기화면의 FlipCard 제작
2. 스크롤 애니메이션에 적용할 커스텀 훅 구현
3. 프로젝트 자세히 보기를 `react-router-dom`을 활용하여 모달창으로 구현

<br/>

> ##  ⭐ 프로젝트 기여

1. **웹 표준/ 접근성 및 성능을 고려하여 작업**
    - 웹 페이지를 마크업할 때 div만 사용하기보다는 시맨틱 태그를 적극 활용하였습니다. 
      시맨틱 태그를 통해 가독성을 좋게 만들고, 검색 엔진 최적화 (SEO)부분에서 이점을 가져오게합니다.
    - LightHouse를 참조하여, 초기화면 로딩 속도를 개선하기 위해 차세대 이미지 형식(webp)으로 변경하여<br/> 기존 **FCP(0.9s), LCP(1.8s) → FCP(0.7s),LCP(1.3s)** 로 개선
2. **React Hooks를 사용하여 스크롤 애니메이션에 적용된 커스텀 훅 구현**
    - 기존 각 컴포넌트마다 ref를 지정하고, 함수를 정의하여 애니메이션을 조작 하였으나,
      중복되는 코드들을 하나의 함수로 정의하여 재사용성을 높이고자 구현하게 됨
    - 오픈 소스를 찾아보며, Custom Hook을 작성하는 방법과 동작 방식을 이해하게 됨
    - Custom Hook 내에서 useRef를 생성 및 함수를 생성하여 파라미터로 duration, delay, value를 통해 각각 다른 애니메이션을 적용 시킬 수 있도록 정의
    - 항상 같은 값을 전달 받게 되었을 시, 반복 호출을 최소화하기 위해 useCallback, useEffect를 사용
    - IntersectionObserver를 통해 화면에 감지되면 애니메이션이 실행되는데, 컴포넌트마다 높이가 달라 애니메이션이 부자연스럽게 작동하게 됨
      컴포넌트마다 화면 감지 영역을 지정할 수 있도록 threshold의 값 또한 파라미터로 전달

      threshold의 경우 선택 옵션으로 값을 전달하지 않았을 때는 기본값을 적용
    - return 값은 생성한 ref와 style 속성을 반환하도록 지정하고, 스프레드 연산자를 통해 컴포넌트의 props로 전달
      
      
3. **tailwindCSS와 styled-components를 결합하여, 초기화면 FlipCard를 제작**
    - 원하는 디자인의 FlipCard를 구현하기위해 backface-visibility 속성을 필요로 하였지만,
      기존 tailwindCSS에는 클래스명으로 backface-visibility 속성을 지원하지 않음
      
      tailwind로 적용하기 위해서는 추가 Tailwind 3dTrasnform Plugin 라이브러리를 설치해야 함

    - 사용 중이던 styled-components와 결합하여 컴포넌트 시켜, backface-visibility 속성을 
      명시하고, 클릭 상태를 props로 전달하여 카드를 뒤집는 동적 스타일링을 적용

4. **React-Router-Dom을 통한 중첩라우팅으로 모달창 구현**
    - useState를 통해서도 모달창을 구현할 수 있었으나, URL이 변경되지 않아 뒤로 가기 기능을 이용할 수 없기 때문에 react-router-dom 을 통해 모달창을 구현
    - path=”/” 인 Route 내부에 path=”/:ProjectId” 라우터를 작성하여 기존 페이지 위에 컴포넌트가 렌더링 되도록 중첩 라우팅
    - 모달 창 상단에는 <Dot /> 컴포넌트를 리스트형태로 출력하여 클릭 시 다른 프로젝트로 이동할 수 있도록 구현
  
      

> ## 💡 성과

1. **Custom Hook 및 props 전달 방식 이해도 상승**
   - 초기에 navigation 버튼 클릭 시 해당 구간으로 이동하는 스크롤 애니메이션을 컴포넌트 마다 작성하였습니다.
   - 매번 똑같이 사용되기 때문에 Custom Hook으로 제작하여 재사용성을 높이고, 값이 변경되지 않을 떄는 함수를 저장해둔 뒤 재사용하는 방식으로 
     최적화하는 useCallback을 사용하면서 메모이제이션 개념을 추가적으로 이해할 수 있었습니다.
   - 기존에는 Custom Hook 을 자주 사용되는 함수 ( 데이터 패칭 함수 ) 들을 정의하였다면, 
     이번에 스크롤 애니메이션 훅을 제작하게 되면서, Custom Hook은 React Hook을 활용하여 재사용성을 높이는 함수라는 것을 알게 되었으며, 이해도를 높일 수 있었습니다.
   - return 값을 스프레드 연산자를 통해 props로 전달할 수 있다는 방법을 알 수 있었습니다.

3. **웹 성능 및 최적화**
   - 지금까지 프로젝트를 진행할 때는 컴포넌트를 설계하고, 기능을 구현하는데 집중을 했었습니다.
   - 프로젝트의 크기가 점점 커지면서, 애플리케이션이 점점 느려지는 현상을 느끼게 되었고, 이번 프로젝트에서도 초기 로딩 속도의 변화가 느껴졌으며, 
     사용된 이미지와 애니메이션이 많았기에 느려지는 것 같아, 성능과 최적화에 대해 찾아보게 되었습니다.
   - 기본적으로 Chrome에서 제공하는 LightHouse로 측정 결과 LCP 성능 부분에서 위험점수를 받게 되었고, 이부분은 이미지 최적화 부분에서 문제가 발생한다는 것을 알게되어,
     이미지 형식을 차세대 Webp로 변경하며 개선할 수 있었습니다.

> ## 💭 회고

단순히 이미지 형식만 변경했음에도, LCP 속도가 1.8초에서 1.3초로 개선되는 것을 보고 
웹 성능 최적화는 단순히 기능 구현만큼이나 중요하다는 것을 알게 되었고,  최적화 작업은 
개발 과정에서 지속적으로 고려해야 한다는 점을 배울 수 있었습니다.

성능 최적화 기법과 도구에 대해 학습하고 적극적으로 적용해야겠다 생각하게 되었습니다.
