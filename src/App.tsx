import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Main } from "pages/Main";
import { ProjectDetail } from "components/ProjectDetail/ProjectDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/:ProjectId" element={<ProjectDetail />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
