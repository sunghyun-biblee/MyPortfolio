import MainImg from "assets/img/ClassHub/Mainpage2.jpg";
import Commupage from "assets/img/ClassHub/CommunityPage.jpg";
import CommuDetail from "assets/img/ClassHub/CommuDetail.jpg";
import LecturePage from "assets/img/ClassHub/LecturePage2.jpg";
import PaymentedPage from "assets/img/ClassHub/PaymentedPage.jpg";
import MyPageDashBoard from "assets/img/ClassHub/MypageDashBoard.jpg";
export const ClassHubData = {
  id: "Class",
  title: "ClassHub",
  mainImage: MainImg,
  colorConcept: "#70AEF9",
  personnel: [1, 3, 4],
  date: "2024.05.01~ 2024.06.18",
  Contribution: "35%",
  role: "프론트엔드 담당",
  skills: [
    {
      name: "React",
      description:
        "React는 컴포넌트 기반으로, Virtual DOM을 활용해 웹 애플리케이션의 성능을 최적화 합니다. 컴포넌트 재사용성을 높입니다.",
    },
    {
      name: "React-Query",
      description:
        "React Query는 React 애플리케이션에서 데이터 가져오기, 관리 및 캐싱을 사용하기 쉽게 해주는 라이브러리입니다. \n서버에서 데이터를 비동기적으로 가져오고 `Mutation`을 사용하여 낙관적 업데이트를 통해 사용자 경험을 개선합니다.\nAPI 요청을 처리하고 결과를 캐싱하여 성능을 최적화할 수 있습니다.",
    },
    {
      name: "Typescript",
      description:
        "TypeScript는 JavaScript의 슈퍼셋 언어로, 정적 타입을 지원하여 코드를 작성할 때 타입을 명시함으로써 오류를 사전에 확인할 수 있어 개발 과정의 `안전성`을 높여줍니다",
    },
    {
      name: "tailwindCSS",
      description:
        "TailwindCSS는 클래스 기반 스타일링을 통해 `일관된 디자인을 빠르게 구현`할 수 있는 CSS 프레임워크입니다.\n특히, 반응형 웹 구현 가속화하기 좋으며 개발자의 `피로도를 줄이는 장점`이 있습니다",
    },
    {
      name: "styled-components",
      description:
        "Styled Components는 JavaScript 코드 내에서 CSS를 작성할 수 있게 해주는 CSS-in-JS 라이브러리입니다. \n컴포넌트와 스타일을 함께 정의하여 스타일을 관리하고 재사용할 수 있으며, `props`를 전달하여 조건부로 스타일을 다르게 적용할 수 있습니다.",
    },
  ],
  summary: `**클래스허브** 는 언제 어디서나 접근 가능한 온라인 학습 플랫폼으로 \n\n  다양한 프로그래밍 주제와 전문가 강의를 통해 학생들에게 편리하고 효율적인 학습 경험을 제공합니다.`,
  background:
    "개발자로 성장하는 과정에서 독학으로 여러 학습 시스템을 활용한 경험이 많은 저는 인프런이나 유데미 등 학습 플랫폼에서 제공되는 영상 이어보기, 학습 현황 추적 기능을 직접 구현해 보고 또한 학습자들과 소통할 수있는 기능과 특히 독학자를 위한 스터디 모집 기능을 구현해보면\n 좋을 것 같다는 생각이 들어서, 효율적인 학습 환경을 구현해보고자 프로젝트를 기획하게 되었습니다. ",
  mainFuntion: [
    "커뮤니티의 질문답변 및 스터디 모집 글 등록, 댓글 등록",
    "강의 영상 이어듣기",
    "강의 장바구니 관리 기능",
    "PortOne을 활용한 결제 및 결제내역 조회 기능",
    "사용자의 프로필관리 및 권한 설정",
  ],
  myActivities: [
    {
      title: "커뮤니티 댓글작성 시 사용자 경험 개선",
      description:
        "커뮤니티 기능 중 댓글 작성 시 화면 깜빡임을 최소화하고, 실시간 업데이트 되도록 React-Query의 Mutation을 활용하여 사용자 경험을 개선하였습니다.",
    },
    {
      title: "유저관련 기능 구현",
      description:
        "소셜로그인 (Google) 으로 회원가입 및 로그인 시 발급받는 `JWT 토큰을 쿠키`로 관리 하며, 유저정보는 `ContextAPI` 를 사용하여 전역적으로 관리",
    },
    {
      title: "질답 및 스터디모집을 위한 커뮤니티 구현",
      description:
        "게시물 상세페이지의 로딩속도를 줄이기 위해 `React-Query의 prefetch` 를 사용하여 리스트에 출력되는 데이터의 정보를 미리 가져옵니다 ",
    },
    {
      title: "PortOne을 활용하여 강의 결제 및 결제내역 조회 구현",
      description:
        "강의 바로신청 및 장바구니 결제 시, 물품 정보와 금액 정보를 DB로 전달하는 API를 호출하여 사전 결제 금액을 확인하고, 이와 동일하다면 결제를 가능하게 구현했습니다. 결제가 성공하면 반환된 imp_Uid를 참조하여 결제 내역을 조회하고 출력하도록 구현",
    },
    {
      title: "강의 업로드 페이지 구현",
      description:
        "비디오 업로드를 위해 이중 배열로 구성하여 각 섹션별로 저장하고, 강의 제목, 가격 등의 정보를 `JSON 형식으로 formData에 추가` 한 후, 강의 업로드시 `multipart/formData 형식` 으로 POST 요청하도록 기능을 구현",
    },
    {
      title: "localStorage를 사용하여 영상 이어듣기 구현",
      description:
        "사용자가 영상을 시청할 때 `localStorage에 영상 정보를 저장`하여, 추후에 재시청할 때 localStorage의 정보를 참조하여 영상을 이어서 들을 수 있도록 구현",
    },
  ],
  troubleShooting: [
    {
      title: "커뮤니티 댓글목록 사용자 경험 향상",
      trouble:
        "**[문제점]** 커뮤니티 게시글에 댓글을 작성할 때 화면이 즉시 업데이트되지 않고, 댓글 데이터를 업데이트하는 API 호출 시 화면이 리렌더링되면서 `깜빡거리는 문제`가 발생하여 `사용자 경험이 저하`되었습니다.",
      Resolution:
        "**[해결방안]** React-Query의 `Mutation`을 활용하여 댓글 작성 시 댓글 목록이 실시간으로 업데이트되도록 `낙관적 업데이트`를 적용하여, 화면 깜빡임을 최소화하고 `사용자 경험을 향상`시킬 수 있습니다",
    },
    {
      title: "스프링 시큐리티를 적용 및 배포 후 CORS 에러 발생",
      trouble:
        "**[문제점]** 로컬에서 작업할 때는 CORS 에러가 발생하지 않았으나, 스프링 시큐리티 및 배포작업을 마치고난 뒤 로컬에서도 `CORS` 에러가 발생",
      serach:
        "**[중간과정]** 회의 결과, 배포하기 전에는 `Access-Control-Allow-Origin`에 localhost를 적용하여 CORS 오류가 발생하지 않았습니다. 그러나 배포 후 동일한 설정을 적용했음에도 불구하고 접근이 허용되지 않았습니다. 또한 스프링 시큐리티가 추가되면서 문제 발생 지점을 찾기 위해 `많은 시간이 필요할 것으로 예상` 된다고 전달 받았습니다.",
      Resolution:
        "**[해결방안]** CORS 오류로 인해 모든 API 호출이 차단되어 아무 작업도 할 수 없는 상황을 해결하기 위해 `http-proxy-middleware` 라이브러리를 사용하여 프록시를 설정하여 CORS 문제를 해결했습니다",
      myThink:
        "**[회고]** 이번 프로젝트에서 API에 매우 의존적인 프로젝트는 CORS 오류가 발생하면 아무 작업도 할 수 없다는 점을 실감했습니다. 이런 상황을 해결하기 위해 `Mock Service Worker의 필요성`을 느꼈고, 이를 대비하여 미리 Mock 데이터를 활용할 수 있는 방법에 대해 공부해야겠다고 결심했습니다.",
    },
    {
      title: "강의 시청페이지 데이터 호출시 파일을 불러올 수 없음",
      trouble:
        "**[문제점]** 강의 데이터 호출시 썸네일과 영상 데이터 url을 가져왔으나, url을 참조하면 데이터가 출력되지않았다.강의 탭에서는 썸네일도 불러오지 못하고, 영상 시청페이지에서도 해당 url로 영상이 출력되지않았다.커뮤니티의 이미지 post, get 방식과 동일하였으나, 강의쪽에서만 문제가 발생하였다.",
      tryProp: {
        text: "[문제 해결을 위해 시도한 방법]",
        trylist: [
          "프론트엔드쪽 문제인 것 같아 강의 썸네일도 커뮤니티의 이미지를 불러오는 방식으로 변경해보았고,영상은 react player가 아닌 일반 html 태그인 video 태그도 활용해보았지만 출력이 되지않았다.",
          "데이터를 호출하였을때 전달 받은 url을 브라우저 주소창에 입력하였을 때, 커뮤니티 이미지 url은 이미지를 잘 보여주었으나,강의 썸네일 이미지 url을 입력하였을 때는 아무일도 일어나지않았다.",
          "백엔드팀들과 화면공유로 강의 등록시 데이터가 제대로 전달되는지 실시간으로 확인하였다.확인결과 데이터는 제대로 전달되는 것으로 확인되었으나, 백엔드쪽에서 ubuntu에 저장하는 과정에서 문제가 발생한 것으로 확인되었다.",
        ],
      },
      Resolution:
        "**[해결 실패]** 결론적으로는 해당 문제를 해결하지 못하였다. 백엔드팀들과 계속 이야기하였으나, 영상은 다른 이유가 있다하더라도, 강의정보의 썸네일은 커뮤니티 이미지를 저장하고 불러오는 방식과 똑같기때문에 출력되어야했으나, 데이터가 출력되지않았다.",
      tryResult: {
        text: "[결과]",
        trylist: [
          "ubuntu 저장과정에서 발생하는 문제라 프론트 입장에서 더 이상 도움을 줄 수 있는 방법이 없었다. 결국 프로젝트 마감기간 동안 해당 문제를 해결하지 못하였다.",
          "추가로 영상시청 페이지에서 이어듣기 기능을 구현하기위해 영상데이터가 필수였지만, 데이터를 가져오지 못하여 이어듣기 기능을 구현하지 못하였다.",
          "차선책으로 프론트 로컬환경에서 임의의 영상데이터를 삽입하고, localStorage를 활용하여 영상을 중단한 시점에 LocalStorage에 저장하여, 재방문할 때 중단한 시점부터 계속 재생할 수 있도록 기능을 구현하였다.",
          "영상 데이터를 불러와서 실시간으로 영상 정보를 주고받는 기능을 구현하지 못하여 아쉬웠지만, LocalStroage를 통해서도 이어듣기를 구현할 수 있던 것에 만족하였다.",
        ],
      },
      myThink:
        "**[향후 계획]** 이번 문제를 통해 또 다시 Mock Service Worker의 필요성을 깨달았다.API 의존도가 높은 프로젝트에서 CORS에러와 유사하듯이 백엔드팀에서 이슈가 발생하게되면 프론트엔드 입장에서 아무것도 할 수 없는 상태가 되어 무력했었다.앞으로 비슷한 문제가 다시 발생하게 된다면, Mock Service Worker를 활용하여 간접적으로 API 통신 및 기능을 구현하기 위해,추후 Mock Service Worker에 대해서 반드시 공부할 예정이다.",
    },
  ],

  ProjectIMG: [
    { img: MainImg, imgDescrip: "메인 페이지" },
    { img: Commupage, imgDescrip: "커뮤니티 페이지" },
    { img: CommuDetail, imgDescrip: "글 상세 페이지" },
    { img: LecturePage, imgDescrip: "강의목록 페이지" },
    { img: PaymentedPage, imgDescrip: "결제완료 페이지" },
    { img: MyPageDashBoard, imgDescrip: "마이페이지 대시보드" },
  ],
  deploy: null,
  github: "github.com/sunghyun-biblee/ClassHub",
  category: "팀 프로젝트",
};
