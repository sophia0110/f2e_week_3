import "./App.css";
import {Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ToDoPage from "./pages/ToDoPage"

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/f2e_week_3"} element={<HomePage />} />
        <Route path={"/f2e_week_3/todo"} element={<ToDoPage />} />
      </Routes>
    </>
  );
}

export default App;
