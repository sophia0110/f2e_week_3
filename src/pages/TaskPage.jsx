import React, { useRef } from "react";
import TaskDragDrop from "../components/drop/TaskDragDrop";
const TaskPage = () => {
  const getValue = useRef();
  return (
    <>
      <div className="relative h-[calc(100vh-4vh)] w-full">
        <div className="absolute top-[3%] right-[5%] h-64 w-48 bg-[url('./imgs/chips_1.png')]  bg-no-repeat"></div>
        <div className=" h-full w-full ">
        <TaskDragDrop ref={getValue} />
        </div>
      </div>
    </>
  );
};

export default TaskPage;
