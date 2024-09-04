import MainImg from "assets/img/TripFixied/mainpage2.jpg";
import DateCheck from "assets/img/TripFixied/DateCheck.jpg";
import placeCheck from "assets/img/TripFixied/PlaceCheck.jpg";
import HouseCheck from "assets/img/TripFixied/HouseCheck.jpg";
import MapView from "assets/img/TripFixied/Mapview.jpg";
import MypagePlan from "assets/img/TripFixied/MypagePlan.jpg";
export const TripFixiedData = {
  id: "Trip",
  title: "Trip_Fixied",
  colorConcept: "#74c4cc",
  mainImage: MainImg,
  personnel: [1, 1, 2],
  date: "2023.12.05~2024.02.02",
  Contribution: "55%",
  role: "프론트엔드 담당",
  skills: [
    {
      name: "React",
      description: [
        "React는 컴포넌트 기반으로 동작하며, Virtual DOM을 통해 웹 애플리케이션의 성능을 최적화합니다. 컴포넌트 재사용성을 높이고, useState를 통해 상태를 관리하며, useEffect를 사용하여 API 호출을 최소화하는 과정을 거치면서 `React Hook`의 기본을 익힐 수 있었습니다.",
      ],
    },
    {
      name: "framer-motion",
      description: [
        "Framer Motion은 직관적인 코드로 손쉽게 애니메이션을 만들 수 있는 도구입니다.\n페이지 전환 시 간단한 코드 몇 줄로 애니메이션을 적용할 수 있습니다.",
      ],
    },
    {
      name: "styled-components",
      description: [
        "Styled Components는 JavaScript 코드 내에서 CSS를 작성할 수 있게 해주는 CSS-in-JS 라이브러리입니다. 컴포넌트와 스타일을 함께 정의하여 스타일을 관리하고 재사용할 수 있습니다. 또한 `props`를 전달하여 조건부로 스타일을 다르게 적용할 수 있습니다.",
      ],
    },
    {
      name: "Firebase",
      description: [
        "Firebase는 유저 인증, 데이터베이스, API 등 반복적으로 사용되는 기능을 간편하게 제공합니다. ",
        "프로젝트 팀원이 2명으로 줄어들면서, 다른 부분에 더 많은 시간을 투자하기 위해 Firebase의 `Authentication` 및 `OAuth` 기능을 활용하여 간단하게 **SNS 로그인**을 구현하였습니다.",
        " 이를 통해 유저 관련 CRUD 과정을 직접 구현하지 않아도 되어 많은 시간을 절약할 수 있었습니다",
      ],
    },
  ],
  summary:
    "**Trip_Fixied** 는 사용자의 여행 일정에 맞춰 관광지, 축제 정보, 숙소 등 다양한 선택지를 제공하여 여행 일정을 계획하고 비교하는 데 도움을 주는 서비스입니다.",
  background:
    " 여행지를 정하고 나서도 어떤 활동을 할지 모르거나, 해당 지역의 관광 정보를 찾기 어려운 경우가 많습니다.\n 저 또한 여행을 계획할 때 이러한 불편함을 겪어봤었고, 누군가가 추천해주는 시스템이 있다면 어떨까라는 고민과 함께 개발하게 되었습니다. ",
  mainFuntion: [
    "TourAPI(4.0)를 활용하여 여행 일정에 맞춰 관광지,축제,숙소 상세정보를 제공",
    "제공된 장소의 위치정보를 Naver Maps API를 활용해 장소 표시",
    "여행 일정 기간 동안 OpenWeatherAPI를 통해 날씨정보 제공",
    "세워둔 여행계획을 마이리스트에 저장 후 비교 가능하도록 구현",
  ],
  myActivities: [
    {
      title:
        "TourAPI 4.0을 활용하여 여행 일정에 맞춘 정보를 무한 스크롤 방식으로 제공",
      description: [
        "날짜와 지역 선택 페이지에서 입력받은 정보를 바탕으로 `TourAPI`를 통해 데이터를 요청",
        "전달받은 데이터를 무한 스크롤을 통해 리스트 형식으로 제공",
        "관광지의 경우 입력한 지역을 바탕으로 정보를 제공하며, 축제의 경우 입력한 지역과 날짜를 기준으로 해당 기간 동안 진행되는 축제 정보를 제공",
        "스크롤이 리스트 박스 하단에 닿으면 추가 데이터를 요청하여 제공",
        "입력 받은 정보를 바탕으로 제공할 데이터가 없을 경우, `해당 날짜와 지역에 대한 관광 정보가 없습니다` 텍스트를 출력하도록 구현",
      ],
    },
    {
      title: "OpenWeatherAPI 를 통해 날씨정보 제공",
      description: [
        "입력받은 날짜 정보를 바탕으로 OpenWeatherAPI 를 통해 데이터를 요청",
        "여행 날짜가 웹사이트 접속일 기준 5일 이내일 경우, 입력 날짜를 기준으로 날씨 정보를 제공, 여행 날짜가 접속일 기준 5일을 초과할 경우, 접속일로부터 최대 5일간의 날씨 정보를 제공 \n `무료버전을 사용하므로, 접속일 기준으로 최대 5일 까지의 날씨 정보만 제공 가능`",
        "날씨 정보는 3시간 간격으로 온도, 체감 온도, 날씨, 구름양 정보 제공 \n `접속시간이 00시 일 경우 00시로부터 6시간 간격으로 날씨 정보를 제공`",
      ],
    },
    {
      title: "여행지 위치 정보를 Naver Maps API를 활용해 마커로 표기",
      description: [
        "입력 정보를 바탕으로 제공된 관광지,축제 정보를 계획표에 추가할 경우 위치를 한눈에 파악할 수 있도록 우측 지도에 마커로 표기",
        "관광지와 축제, 숙소 위치를 직관적으로 볼 수 있도록 서로 다른 마커를 사용\n `관광지 : 카메라 모양, 축제 : 별 모양 폭죽, 숙소 : 침대 모양`",
      ],
    },
    {
      title: "여행계획을 마이리스트에 저장 후 비교 가능하도록 구현",
      description: [
        "완성된 여행 계획표를 저장할 시 `마이페이지 - MY PLAN` 에서 확인 가능",
        "리스트는 저장된 순서대로 정렬되어있으며, 별명과 날짜/지역 유저 정보를 제공",
        "관광지, 축제, 숙소 정보를 카테고리 별로 확인할 수 있으며, 작성한 메모 또한 동시에 확인 가능",
      ],
    },
    {
      title: "페이지 전환 애니메이션 구현",
      description: [
        "SPA로 구성된 React 프로젝트에서, 페이지가 하나로 구성되어있으니 페이지 전환 시 애니메이션 적용이 가능한지 고민하게 되었고, 구글링을 통해 `Framer Motion`을 사용해 이를 구현할 수 있음을 알게 되었습니다.",
        "페이지 전환 애니메이션 적용이 가능한 이유는 React는 컴포넌트 기반 구조를 가지고 있어, 페이지 이동 시 컴포넌트를 `렌더링하는 과정에서 애니메이션 적용이 가능했던 것`",
        "SPA에서는 페이지 이동 시 새로운 페이지를 로드하지 않고, 현재 페이지의 내용이 교체되거나 갱신되는 방식으로, DOM에 컴포넌트가 추가되거나 제거될 때 `Framer Motion`을 활용해 애니메이션을 적용",
      ],
    },
  ],
  troubleShooting: [
    {
      title: "여행지의 데이터를 제공하는 과정에서 일일 API 호출 트래픽 초과",
      trouble:
        "**[문제점]** \n무한 스크롤 기능 도입 후 API 호출 트래픽이 급증하여, type Error token 에러가 자주 발생 \n\n여행지의 정보를 무한 스크롤 방식을 통해 리스트 형식으로 보여주게 되며, 리스트 박스가 하단에 닿았을 때 API를 호출하다 보니 프로젝트 개발 과정에서 일일 API 호출 트래픽 이 짧은 시간에 초과하는 상황이 발생",

      Resolution:
        "**[중간 소통]** \n 관광지, 축제, 숙소 정보들을 DB에서 관리하여 페이지네이션으로 구현하기에는 백엔드 팀원의 숙련도가 다소 부족한 상태로 프로젝트 마감 기간 또한 애매해지는 상황",
      result: [
        "클라이언트 측에서 초기 데이터 요청 시 모든 데이터를 요청하여 이중 배열을 통해 데이터를 나누어 저장하고, 스크롤 이벤트 발생 시 인덱스를 증가 시킴",
        "인덱스를 참조하여 데이터를 출력 하도록 변경한 결과, 일일 API 호출 수를 약 85% 감소",
      ],
    },
    {
      title: "Firebase 인증 상태 관리 및 UI 업데이트 문제 해결",
      trouble:
        "**[문제점]** \nFirebase의 `auth.currentUser`를 사용해 초기 로그인 여부에 따라 UI를 설정하려 했으나, 로그인 이후 새로고침 시 자동으로 로그아웃되는 문제 발생",

      Resolution:
        "**[해결 방안]** \n useState를 사용하여 로그인 상태를 관리하려 했지만, 페이지를 이동하게 되면 해당 상태 정보 또한 참조할 수 없었고, Firebase 공식문서를 통해 적합한 방법이 있는지 찾아보던 중  `authStateReady( )`와 `onAuthStateChanged( )` 메서드 발견\n\n`authStateReady( )` : 초기 인증 상태를 확인하는데 사용하며, 로그인 여부를 확인하는 동안 Promise를 반환하게 되고, 초기 인증 상태가 해결될 때 즉시, resolve 된다.\n`onAuthStateChanged( )` : 해당 메서드 또한 비동기적으로 동작하며, 사용자가 로그인하거나 로그아웃 할 때 마다 이벤트를 감지하고 처리할 수 있음",
      result: [
        "**[결과]**\n `onAuthStateChanged( )` 메서드 같은 경우 웹 사이트 접속 시에 로그인을 한 뒤 상태 변경에 따라 이벤트를 발생 시킵니다.\n\n개발 과정에서 원하는 기능은 웹 사이트에 접속하더라도 로그인을 했다면 이어서 로그인 상태를 유지하기 위해, 실시간으로 유저 상태를 변경하기보단, 초기 로그인 상태에 맞게 이용 가능 하도록 하기위해 `authStateReady( )`를 사용",
        "`authStateReady()` 메서드를 사용하여 페이지에 들어오게 되면 로그인 여부를 파악하고, 삼항연산자를 이용해 로그인 여부가 확인되면 삼항 연산자를 통해 특정 컴포넌트를 렌더링하도록 해결",
        "authStateReady() : `friebase javascript 릴리스 노트 버전 10.1.0 - 2023년 7월 20일` 추가된 것으로 확인",
      ],
    },
  ],

  experience: [
    {
      title: "SPA 구현 및 사용자 경험 향상",
      text: [
        "코드를 효율적으로 작성하도록 도와주며, 말로만 듣던 SPA 경험해보고 싶었기 때문에 React 라는 프레임워크를 도입하게 되었습니다.",
        "React를 통해 SPA를 구현해보니 페이지 전환시 발생하는 화면 깜빡임이 최소화되어 눈의 피로감이 많이 줄어들었으며,  이에 사용자 경험이 또한 크게 향상됨을 느낄 수 있었습니다.",
      ],
    },
    {
      title: "효율적인 코드 작성과 React의 매력",
      text: [
        "바닐라 Javascript로 구현할 때 많은 양의 코드를 필요로 했던 작업들이React의 Hook을 통해 짧은 코드로도 구현이 가능하다는 것에 매력을 느끼게 되었습니다.",
        "React를 자세히 알아보고자, 기본 원리와 생명주기를 학습하고, useState, useEffect, useRef 등  React-Hook을 이해하고, 활용하여 상태관리와 부수효과를 효율적으로 관리할 수 있었습니다.",
        "기본 원리를 알아본 뒤, Framer-Motion 을 사용하게 되었을 때, 생명주기 또한 어떤 방식으로 흘러가는지 시각적으로 확인할 수 있어 이해하기가 수월하였습니다.",
      ],
    },
    {
      title: "Firebase를 활용한 간편한 소셜 로그인 구현",
      text: [
        "Firebase를 이용한 OAuth 소셜 로그인 인증 서비스를 사용함으로써, 로그인 관련 CRUD 과정을 간소화하여 개발 시간을 크게 절약할 수 있었습니다.",
        "기존 바닐라 Javscript로 작업할 때보다 개발 과정의 효율성을 크게 높일 수 있다는 점에서 매우 의미 있는 경험이 되었습니다.",
      ],
    },
    {
      title: "팀 리딩 및 커뮤니케이션 향상",
      text: [
        "프로젝트 중 팀원이 중도 이탈하거나 숙련도 부족으로 일정이 지연되는 상황이 있었습니다. 이때, 팀원들과 적극적으로 소통하며 서로 가르쳐주고 협력해 문제를 해결했습니다.",
        "일정이 어려워 보이면 현실적인 상황을 정리해 팀과 공유하고, 목표를 조정하여 프로젝트를 마무리했습니다.",
        "이 과정에서 커뮤니케이션 능력을 향상 및 다른 분야에 대한 이해와 지식도 얻게 되었습니다.",
      ],
    },
  ],
  ProjectIMG: [
    { img: MainImg, imgDescrip: "메인 페이지" },
    { img: DateCheck, imgDescrip: "날짜 입력 화면" },
    { img: placeCheck, imgDescrip: "장소, 날씨정보 제공 화면" },
    { img: HouseCheck, imgDescrip: "숙소 정보 제공 화면" },
    { img: MapView, imgDescrip: "추가한 장소 확인 화면" },
    { img: MypagePlan, imgDescrip: "마이페이지의 나의 계획" },
  ],
  deploy: null,
  github: "github.com/sunghyun-biblee/Trip_Fixied_Project",
  category: "팀 프로젝트",
};
