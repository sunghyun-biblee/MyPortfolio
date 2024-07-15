import React, { useEffect, useRef, useState } from "react";
import { AboutMe } from "components/aboutme/AboutMe";
import { IntroduceTwo } from "components/aboutme/IntroduceTwo";
import { Header } from "components/header/Header";
import { Projects } from "components/projects/Projects";
import { SkillPart } from "components/skill/SkillPart";
import { useScrollMove } from "hooks/useScrollMove";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";

export const Main = () => {
  const nav = [
    useScrollMove("IntroDuce"),
    useScrollMove("About Me"),
    useScrollMove("Skills"),
    useScrollMove("Projects"),
    useScrollMove("Contact"),
  ];

  const scrollRef = useRef<HTMLDivElement[]>([]);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const updateProgressBar = () => {
      const currentScrollPosition = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      const progress =
        Number((currentScrollPosition / scrollHeight).toFixed(2)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateProgressBar);
  }, []);

  return (
    <div className="App mx-auto my-0  mysm:max-w-[100vw] relative">
      <div className="fixed top-0 left-0 right-0 z-20">
        <div className=" bg-[#7db3e9] ">
          <div
            className={`h-[10px] bg-[#1f7ee3] w-[100%] transition-all rounded-r-lg`}
            style={{ transform: `translateX(${scrollProgress - 100}%)` }}
            id="progress-bar"
          ></div>
        </div>
        <Header scrollRef={scrollRef} nav={nav}></Header>
      </div>
      <div className="min-h-[100dvh] flex flex-col items-center overflow-hidden">
        <IntroduceTwo value={nav[0]}></IntroduceTwo>
        <AboutMe value={nav[1]}></AboutMe>
        {/* <Introduce></Introduce> */}
        <SkillPart value={nav[2]}></SkillPart>
        <Projects value={nav[3]}></Projects>
        <Footer value={nav[4]}></Footer>
      </div>
      <Outlet />
      <SpeedInsights />
    </div>
  );
};
