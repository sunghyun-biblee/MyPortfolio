import React, { useEffect, useRef, useState } from "react";

import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Header } from "components/header/Header";
import { Introduce } from "components/aboutme/Introduce";
import { AboutMe } from "components/aboutme/AboutMe";
import { IntroduceTwo } from "components/aboutme/IntroduceTwo";
import { SkillPart } from "components/skill/SkillPart";
import { Projects } from "components/projects/Projects";
import { useScrollMove } from "hooks/useScrollMove";
import { Test } from "Test";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { PortFolioComponent } from "components/ProjectDetail/PortFolioComponent";
import { ClassHubComponent } from "components/ProjectDetail/ClassHubComponent";
import { TripFixiedComponent } from "components/ProjectDetail/TripFixiedComponent";
import { Main } from "pages/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="PortFolio" element={<PortFolioComponent />}></Route>
          <Route path="ClassHub" element={<ClassHubComponent />}></Route>
          <Route path="TripFixied" element={<TripFixiedComponent />}></Route>
        </Route>
      </Routes>

      {/* <ReactQueryDevtools></ReactQueryDevtools> */}
    </>
  );
}

export default App;
