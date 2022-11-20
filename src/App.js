import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ToDoPage from "./pages/ToDoPage";
import GuidePage from "./pages/GuidePage";
import MemberPage from "./pages/MemberPage";
import TaskPage from "./pages/TaskPage";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/f2e_week_3"} element={<HomePage />} />
        <Route path={"/f2e_week_3/todo"} element={<ToDoPage />} />
        <Route path={"/f2e_week_3/guide"} element={<GuidePage />} />
        <Route path={"/f2e_week_3/member"} element={<MemberPage  />} />
        <Route path={"/f2e_week_3/task"} element={<TaskPage  />} />
      </Routes>
    </>
  );
}

export default App;
