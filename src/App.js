import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ToDoPage from "./pages/ToDoPage";
import GuidePage from "./pages/GuidePage";
import MemberPage from "./pages/MemberPage";
import TaskPage from "./pages/TaskPage";
import ProcessPage from "./pages/ProcessPage";
import TestPage from "./pages/TestPage";
import FinishPage from "./pages/FinishPage";
import FeedBackPage from "./pages/FeedBackPage";

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
        <Route path={"/f2e_week_3/process"} element={<ProcessPage />} />
        <Route path={"/f2e_week_3/test"} element={<TestPage />} />
        <Route path={"/f2e_week_3/feedback"} element={<FeedBackPage />} />
        <Route path={"/f2e_week_3/finish"} element={<FinishPage />} />
      </Routes>
    </>
  );
}

export default App;
