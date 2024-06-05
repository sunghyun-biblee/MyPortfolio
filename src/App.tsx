import React, { useEffect, useState } from "react";

import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Header } from "components/header/Header";
import { Introduce } from "components/aboutme/Introduce";
import { AboutMe } from "components/aboutme/AboutMe";
import { IntroduceTwo } from "components/aboutme/IntroduceTwo";

function App() {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const qeuryClient = new QueryClient();
  useEffect(() => {
    const updateProgress = () => {
      const currentScrollPosition = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight + 99;

      console.log("currentScrollPosition", currentScrollPosition);
      console.log("scrollHeight", scrollHeight);
      const progress =
        Number((currentScrollPosition / scrollHeight).toFixed(2)) * 100;
      setScrollProgress(progress);
      console.log(progress);
    };

    window.addEventListener("scroll", updateProgress);
  }, []);

  return (
    <QueryClientProvider client={qeuryClient}>
      <div className="App mx-auto my-0  mysm:max-w-[100vw] relative">
        <div className="fixed top-0 left-0 right-0 bg-[#7db3e9] z-20">
          <div
            className={`h-[10px] bg-[#1f7ee3] w-[100%] transition-all rounded-r-lg`}
            style={{ transform: `translateX(${scrollProgress - 100}%)` }}
            id="progress-bar"
          ></div>
          <Header></Header>
        </div>
        <div className="min-h-[100dvh] mt-[82px] flex flex-col items-center">
          <IntroduceTwo></IntroduceTwo>
          <Introduce></Introduce>

          {/* <AboutMe></AboutMe>
          <AboutMe></AboutMe>
          <AboutMe></AboutMe>
          <AboutMe></AboutMe>
          <AboutMe></AboutMe> */}
        </div>
      </div>

      <ReactQueryDevtools></ReactQueryDevtools>
    </QueryClientProvider>
  );
}

export default App;
