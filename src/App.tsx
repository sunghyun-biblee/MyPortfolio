import { ProjectDetail } from "components/ProjectDetail/ProjectDetail";
import { Main } from "pages/Main";
import { Route, Routes } from "react-router-dom";
import "./App.css";

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
