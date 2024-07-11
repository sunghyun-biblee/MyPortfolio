import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Main } from "pages/Main";
import { ProjectDetail } from "components/ProjectDetail/ProjectDetail";
import { SpeedInsights } from "@vercel/speed-insights/react";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/:ProjectId" element={<ProjectDetail />}></Route>
      </Route>
      <SpeedInsights />
    </Routes>
  );
}

export default App;
