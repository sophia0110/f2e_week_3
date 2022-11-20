import React from "react";
import BigButton from "../components/button/BigButton";

const GuidePage = () => {
  return (
    <>
      <div className="relative h-[calc(100vh-2.5vh)] w-full">
        <div className="grid grid-cols-6 gap-3">
          <div className="flex items-center justify-center">
            <div>
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-white">
                <div className=" h-12 w-12 bg-[url('./imgs/one.png')] bg-cover bg-no-repeat"></div>
              </div>
              <div className="w-16 rounded-lg bg-black text-center text-lg text-white">
                Tina
              </div>
            </div>
          </div>

          <div className="col-span-4 m-4 h-36 items-center justify-center rounded-lg bg-white p-4 text-lg text-black font-medium">
            我是資訊，開發 A組的PO，Tina。PO也就是產品負責人(Product
            Owner)。產品負責人會負責評估產品待辦清單的價值與重要性，依序 <span className="text-red-700 font-medium">排列要執行的 優先順序</span>，對齊產品目標。最後排出產品待辦清單(Product
            Backlog)唷！剛好我最近手邊有一個
            <span className="text-red-700 font-medium">『人才招募系統』</span>的案子，我才剛列出了<span className="text-red-700 font-medium">『產品需求清單』</span>。既然你都來了，來試試看<span className="text-red-700 font-medium">調整產品優先度，排出產品待辦清單吧！</span>
          </div>

          <div className="col-start-2 col-end-6 m-4 flex h-36 items-center content-center rounded-lg bg-white p-4 text-xl text-black">
            我們公司也推薦使用Jira做任務的管理呢！
            <div className=" h-12 w-36  m-4 bg-[url('./imgs/jira.png')] bg-no-repeat items-center"></div>
          </div>
        </div>

        <BigButton
          className="absolute bottom-[10%] right-[10%] w-48"
          value={"接受挑戰"}
          to={"/f2e_week_3/todo"}
        ></BigButton>
      </div>
    </>
  );
};

export default GuidePage;
