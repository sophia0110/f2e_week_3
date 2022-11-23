import React from "react";
import BigButton from "../components/button/BigButton";
import SprintDrop from "../components/drop/SprintDrop";

const TaskPage = () => {
  return (
    <>
      <div className="relative h-[calc(100vh-2.5vh)] w-full">
        <div className="grid grid-cols-10 gap-1">
          <div className="flex items-center justify-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                <div className=" h-12 w-12 bg-[url('./imgs/one.png')] bg-cover bg-no-repeat"></div>
              </div>
              <div className="w-16 rounded-lg bg-black text-center text-lg text-white">
                Jason
              </div>
            </div>
          </div>

          <div className="col-span-9 m-2 items-center justify-center rounded-lg bg-white p-4 text-lg font-medium text-black">
            那你來試試看，在這經典的Surum流程圖中，這些流程分別代表哪一個會議呢？
          </div>

          <div className="col-start-2 col-end-11 m-2 content-center items-center rounded-lg bg-white p-4 text-xl text-black">
            <span className="font-medium text-red-700">
              提示：請用拖移的方式將標籤拖移至對應的方框裡
            </span>
            。
          </div>
          <div className="absolute top-[30%] left-0 m-4 w-[25vw] rounded-lg bg-red-700 p-4 text-center text-xl text-white z-10">
            每日站立會議(Daily Scrum)
          </div>
          <div className="absolute top-[30%] left-0 m-2 h-[60vh] w-[60vw] items-center bg-[url('./imgs/Sprint.png')] bg-no-repeat">
            <div className="absolute top-[55%] left-[15%] text-6xl font-medium text-white">
              Sprint
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1">
        <div></div>
        <SprintDrop content={"短衝檢視會議(Sprint Review)"} bgColor={'bg-yellow-500'} borderColor={'border-yellow-500'} ></SprintDrop>
        <SprintDrop content={"短衝自省會議(Sprint Retrospective)"} bgColor={'bg-green-600'} borderColor={'border-green-600'}></SprintDrop>
        </div>
      
        <BigButton
          className="absolute bottom-[10%] right-[5%] w-48"
          value={"完成"}
          to={"/f2e_week_3/feedback"}
        ></BigButton>
      </div>
    </>
  );
};

export default TaskPage;
