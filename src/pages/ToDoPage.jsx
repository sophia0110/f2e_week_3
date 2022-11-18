import React from "react";

import BigButton from "../components/button/BigButton";
import CardDragDrop from "../components/drop/CardDragDrop"

const ToDoPage = () => {
  return (
    <>
      <div className="relative h-[calc(100vh-2.5vh)] w-full">
        <div className="absolute top-[5%] right-[15%] h-64 w-48 bg-[url('./imgs/chips_1.png')]  bg-no-repeat"></div>
        <div className="flex h-full w-full items-start justify-center ">
          <div className="grid justify-items-center ">
            <div className="mt-24 w-96 rounded-t-lg border-4 border-white bg-red-800 p-4 text-center text-2xl font-medium text-white">
              用 拖移 的方式調整優先順序
            </div>
            <div className="h-80 w-[56rem] rounded-lg border-4 border-white p-4 text-center text-2xl font-medium text-white">
              <CardDragDrop />
            </div>
            <div className="w-96 rounded-b-lg border-4 border-white bg-black p-4 text-center text-2xl font-medium text-white ">
              用 拖移 的方式調整優先順序
            </div>
          </div>
        </div>
        <div className="absolute bottom-[30%] left-[12%]  h-24 w-24 bg-[url('./imgs/dice.png')]   bg-no-repeat"></div>
        <BigButton
          className="absolute bottom-[4%] right-[10%] w-48"
          value={"完成"}
          to={"/f2e_week_3/todo"}
        ></BigButton>
      </div>
    </>
  );
};

export default ToDoPage;
