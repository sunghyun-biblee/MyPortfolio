import React, { useEffect, useState } from "react";

import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Header } from "components/header/Header";
import { Introduce } from "components/aboutme/Introduce";
import { AboutMe } from "components/aboutme/AboutMe";

function App() {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const qeuryClient = new QueryClient();
  useEffect(() => {
    const updateProgress = () => {
      const currentScrollPosition = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight + 89;

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
      <div className="App mx-auto my-0 lg:max-w-[1200px] mysm:w-[100%] relative">
        <div className="fixed top-0 left-0 right-0 bg-[#5ea3ec]/50">
          <div
            className={`h-[10px] bg-[#5ea3ec] w-[100%] transition-all rounded-r-lg`}
            style={{ transform: `translateX(${scrollProgress - 100}%)` }}
            id="progress-bar"
          ></div>
          <Header></Header>
        </div>
        <div className="min-h-[100dvh] mt-[82px]">
          <Introduce></Introduce>
        </div>
        <div>
          <AboutMe></AboutMe>
        </div>
      </div>

      <ReactQueryDevtools></ReactQueryDevtools>
    </QueryClientProvider>
  );
}

export default App;
