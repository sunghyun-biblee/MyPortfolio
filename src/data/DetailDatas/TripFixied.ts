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
  date: "2024.05.01~ 2024.06.18",
  Contribution: "55%",
  role: "프론트엔드 담당",
  skills: [
    {
      name: "React",
      description:
        "React는 컴포넌트 기반으로 동작하며, Virtual DOM을 통해 웹 애플리케이션의 성능을 최적화합니다. 컴포넌트 재사용성을 높이고, useState를 통해 상태를 관리하며, useEffect를 사용하여 API 호출을 최소화하는 과정을 거치면서 `React Hook`의 기본을 익힐 수 있었습니다.",
    },
    {
      name: "framer-motion",
      description:
        "Framer Motion은 직관적인 코드로 손쉽게 애니메이션을 만들 수 있는 도구입니다.\n페이지 전환 시 간단한 코드 몇 줄로 애니메이션을 적용할 수 있습니다.",
    },
    {
      name: "styled-components",
      description:
        "Styled Components는 JavaScript 코드 내에서 CSS를 작성할 수 있게 해주는 CSS-in-JS 라이브러리입니다. 컴포넌트와 스타일을 함께 정의하여 스타일을 관리하고 재사용할 수 있습니다. 또한 `props`를 전달하여 조건부로 스타일을 다르게 적용할 수 있습니다.",
    },
    {
      name: "Firebase",
      description:
        "Firebase는 유저 인증, 데이터베이스, API 등 반복적으로 사용되는 기능을 간편하게 제공합니다. 프로젝트 팀원이 2명으로 줄어들면서, 다른 부분에 더 많은 시간을 투자하기 위해 Firebase의 `Authentication` 및 `OAuth` 기능을 활용하여 간단하게 **SNS 로그인**을 구현하였습니다. 이를 통해 유저 관련 CRUD 과정을 직접 구현하지 않아도 되어 많은 시간을 절약할 수 있었습니다",
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
      title: "페이지 전환 애니메이션 구현",
      description:
        "애니메이션을 좋아하는 저는 페이지 전환 시 애니메이션을 적용해보자 라는 생각에 Framer-Motion 을 활용하여, 컴포넌트가 마운트 및 언마운트될 때 애니메이션을 추가했습니다.",
    },
    {
      title: "여행지 위치정보를 Naver Maps API를 활용해 장소 표시",
      description:
        "제공된 여행지 리스트에서 여행지를 클릭하면 Naver Maps의 지도의 위치가 해당 장소가 포커스됩니다. 추가로 계획에 해당 장소를 추가하면 지도에 마커가 생성됩니다",
    },
    {
      title: "OpenWeatherAPI 를 통해 날씨정보 제공",
      description:
        "여행 일정에 지역과 날짜를 기반으로, 여행 날짜가 어플리케이션 접속일로부터 14일 이내라면 해당 지역의 날짜의 날씨 정보를 제공합니다.\n만약, 14일을 초과할 경우 접속일 기준으로 최대 14일까지의 날씨 정보를 제공합니다.",
    },
    {
      title: "TourAPI(4.0) 를 활용하여 여행 일정에 맞춰 각각의 정보를 제공",
      description:
        "여행 일정에 추가된 지역을 기반으로 관광지 정보를 제공하며, 해당 지역과 날짜를 기준으로 여행일정에 포함된 날짜에 열리는 축제 정보만 제공합니다. 또한, 여행 지역을 기반으로 숙소 정보를 제공합니다.",
    },
    {
      title: "여행계획을 마이리스트에 저장 후 비교 가능하도록 구현",
      description:
        "모든 일정을 계획 완료하면 저장하기 버튼을 통해 마이페이지의 마이리스트에 계획 정보가 저장됩니다. 이를 통해 지금까지 세운 계획을 마이페이지에서 확인할 수 있습니다.",
    },
  ],
  troubleShooting: [
    {
      title: "여행지의 데이터를 제공하는 과정에서 일일 API 호출 트래픽 초과",
      trouble:
        "**[문제점]** 여행지의 정보를 무한스크롤로 적용하여 리스트로 보여주게되는데 뷰포트가 바닥을 감지하였을때 API를 호출하다보니 **일일 API 호출 트래픽이 짧은 시간에 초과**하는 상황",
      serach: null,
      Resolution:
        "**[해결방안]** 첫 데이터 호출 시 모든 데이터를 가져와 이중 배열로 나누어 저장하고, 스크롤 이벤트 발생 시 index를 증가시키고 ,증가된 index를 참조하여 데이터를 출력 하도록 하여 API 호출 수를 약 90% 가량 감소시켰습니다",
      myThink: null,
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
