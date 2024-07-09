import MainImg from "assets/img/ClassHub/Mainpage2.jpg";

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
        "React Query는 React 애플리케이션에서 데이터 가져오기, 관리 및 캐싱을 사용하기 쉽게 해주는 라이브러리입니다. \n서버에서 데이터를 비동기적으로 가져오고 Mutation을 사용하여 낙관적 업데이트를 통해 사용자 경험을 개선합니다.\nAPI 요청을 처리하고 결과를 캐싱하여 성능을 최적화할 수 있습니다.",
    },
    {
      name: "Typescript",
      description:
        "TypeScript는 JavaScript의 슈퍼셋 언어로, 정적 타입을 지원하여 코드를 작성할 때 타입을 명시함으로써 오류를 사전에 확인할 수 있어 개발 과정의 안전성을 높여줍니다",
    },
    {
      name: "tailwindCSS",
      description:
        "TailwindCSS는 클래스 기반 스타일링을 통해 일관된 디자인을 빠르게 구현할 수 있는 CSS 프레임워크입니다.\n특히, 반응형 웹 구현 가속화하기 좋으며 개발자의 피로도를 줄이는 장점이 있습니다",
    },
    {
      name: "styled-components",
      description:
        "Styled Components는 JavaScript 코드 내에서 CSS를 작성할 수 있게 해주는 CSS-in-JS 라이브러리입니다. \n컴포넌트와 스타일을 함께 정의하여 스타일을 관리하고 재사용할 수 있으며, props를 전달하여 조건부로 스타일을 다르게 적용할 수 있습니다.",
    },
  ],
  summary: `**클래스허브**는 언제 어디서나 접근 가능한 온라인 학습 플랫폼으로 \n\n  다양한 프로그래밍 주제와 전문가 강의를 통해 학생들에게 편리하고 효율적인 학습 경험을 제공합니다.`,
  background:
    "개발자로 성장하는 과정에서 독학으로 여러 학습 시스템을 활용한 경험이 많았습니다. \n인프런이나 유데미 등 학습 플랫폼에서 제공되는 영상 이어보기, 학습 현황 추적 기능을 직접 구현해 보고\n\n 또한 학습자들과 소통할 수있는 기능과 특히 독학자를 위한 스터디 모집 기능을 구현해보면\n 좋을 것 같다는 생각이 들어서, 효율적인 학습 환경을 구현해보고자 프로젝트를 기획하게 되었습니다. ",
  mainFuntion: [
    "커뮤니티의 질문답변 및 스터디 모집 글 등록, 댓글 등록",
    "강사권한으로 강의 업로드",
    "강의 장바구니 관리 기능",
    "PortOne을 활용한 결제 및 결제내역 조회 기능",
    "사용자의 프로필관리 및 권한 설정",
  ],
  myActivities: [
    {
      title: "프로젝트 기획 및 디자인 구성",
      description:
        "Figma를 활용하여 화면정의서, 와이어프레임,메뉴 구조도, TaskFlow를 제작하였습니다",
    },
    {
      title: "유저관련 기능 구현",
      description:
        "소셜로그인 (Google) 으로 회원가입 및 로그인 시 발급받는 **JWT 토큰 을 쿠키로 관리** 하며, 유저정보는 **ContextAPI** 를 사용하여 전역적으로 관리",
    },
    {
      title: "질답 및 스터디모집을 위한 커뮤니티 구현",
      description:
        "게시물 상세페이지의 로딩속도를 줄이기 위해 **React-Query의 prefetch** 를 사용하여  ",
    },
    {
      title: "PortOne을 활용하여 강의 결제 및 결제내역 조회 구현",
      description:
        "강의 바로신청 및 장바구니 결제 시, 물품 정보와 금액 정보를 DB로 전달하는 API를 호출하여 사전 결제 금액을 확인하고, 이와 동일하다면 결제를 가능하게 구현했습니다. 결제가 성공하면 반환된 imp_Uid를 참조하여 결제 내역을 조회하고 출력하도록 구현",
    },
    {
      title: "강의 업로드 페이지 구현",
      description:
        "비디오 업로드를 위해 이중 배열로 구성하여 각 섹션별로 저장하고, 강의 제목, 가격 등의 정보를 **JSON 형식으로 formData에 추가** 한 후, 강의 업로드시 **multipart/formData 형식** 으로 POST 요청하도록 기능을 구현",
    },
    {
      title: "localStorage를 사용하여 영상 이어듣기 구현",
      description:
        "사용자가 영상을 시청할 때 **localStorage에 영상 정보를 저장**하여, 추후에 재시청할 때 localStorage의 정보를 참조하여 영상을 이어서 들을 수 있도록 구현",
    },
  ],
  troubleShooting: [
    {
      title: "커뮤니티 댓글목록 사용자 경험 향상",
      trouble:
        "**[문제점]** 커뮤니티 게시글에 댓글을 작성할 때 화면이 즉시 업데이트되지 않고, 댓글 데이터를 업데이트하는 API 호출 시 화면이 리렌더링되면서 깜빡거리는 문제가 발생하여 사용자 경험이 저하되었습니다.",
      Resolution:
        "**[해결방안]** React-Query의 Mutation을 활용하여 댓글 작성 시 댓글 목록이 실시간으로 업데이트되도록 낙관적 업데이트를 적용하여, 화면 깜빡임을 최소화하고 사용자 경험을 향상시킬 수 있습니다",
    },
    {
      title: "스프링 시큐리티를 적용 및 배포 후 CORS 에러 발생",
      trouble:
        "**[문제점]** 로컬에서 작업할 때는 CORS에러가 발생하지 않았으나, 스프링 시큐리티 및 배포작업을 마치고난 뒤 로컬에서도 CORS에러가 발생",
      serach:
        "**[중간과정]** 회의 결과, 배포하기 전에는 Access-Control-Allow-Origin을 localhost로 설정하여 CORS 오류가 발생하지 않았습니다. 그러나 배포 후에도 동일한 설정을 추가 적용했음에도 불구하고 접근이 허용되지 않았습니다. 또한 스프링 시큐리티가 추가되면서 문제 발생 지점을 찾기 위해서는 많은 시간이 필요할 것으로 예상되었습니다.",
      Resolution:
        "**[해결방안]** CORS 오류로 인해 모든 API 호출이 차단되어 아무 작업도 할 수 없는 상황을 해결하기 위해 http-proxy-middleware 라이브러리를 사용하여 프록시를 설정하여 CORS 문제를 해결했습니다",
      myThink:
        "**[회고]** 이번 프로젝트에서 API에 매우 의존적인 프로젝트는 CORS 오류가 발생하면 아무 작업도 할 수 없다는 점을 실감했습니다. 이런 상황을 해결하기 위해 Mock Service Worker의 필요성을 느꼈고, 이를 대비하여 미리 Mock 데이터를 활용할 수 있는 방법에 대해 공부해야겠다고 결심했습니다.",
    },
  ],
  ProjectIMG: [],
  deploy: "https://devproject.store",
  github: "github.com/sunghyun-biblee/ClassHub",
  category: "팀 프로젝트",
};
