import React from "react";
import BigButton from "../components/button/BigButton";

const MemberPage = () => {
  return (
    <>
      <div className="relative h-[calc(100vh-2.5vh)] w-full">
        <div className="grid grid-cols-8 gap-3">
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
          <div className="col-span-7 m-2 h-32 items-center justify-center rounded-lg bg-white p-4 text-lg text-black font-medium">
          產品待辦清單完成後，我們來召集 Scrum Master 和開發團隊共同召開短衝規劃會議(Sprint Planning)。短衝即是一個迭代，具有固定時間限制，我們會在這個會議中，決定要完成哪些工作事項來達到商業需求，<span className="text-red-700 font-medium">列出短衝待辦清單(Sprint Backlog)</span>，由開發團隊在接下來的產品開發週期裡執行。
          </div>
          <div className="flex items-center justify-center">
            <div>
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-white">
                <div className=" h-12 w-12 bg-[url('./imgs/one.png')] bg-cover bg-no-repeat"></div>
              </div>
              <div className="w-16 rounded-lg bg-black text-center text-lg text-white">
                Tim
              </div>
            </div>
          </div>
          <div className="col-span-7 m-2 h-32 items-center justify-center rounded-lg bg-white p-4 text-lg text-black font-medium">
          嗨嗨 你是新來的前端吧！我是這次的 Scrum Master 小捷，我的工作主要是促成開發團隊成員協作、引導團隊進行自省會議，提升團隊成員對 Scrum 瞭解。這兩位是 Jason和 Allen，是我們開發團為的成員唷～目前我們團隊一次Sprint是兩的時間，依照我的觀察，目前我們團隊一次 Sprint 週期是兩週的時間，依照我的觀察，<span className="text-red-700 font-medium">目前團隊可以負擔的點數 (Sprint Point) 大約是 20 點。</span>
          </div>
          <div className="flex items-center justify-center">
            <div>
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-white">
                <div className=" h-12 w-12 bg-[url('./imgs/one.png')] bg-cover bg-no-repeat"></div>
              </div>
              <div className="w-16 rounded-lg bg-black text-center text-lg text-white">
              Jason
              </div>
            </div>
          </div>
          <div className="col-span-7 m-2 h-24 items-center justify-center rounded-lg bg-white p-4 text-lg text-black font-medium">
          欸新來的，你應該不知道點數是什麼意思吧 哈哈 我來跟你介紹一下吧～ <span className="text-red-700 font-medium">Sprint Point 目的是為了衡量速度，是用大概花費的時間預估出的相對點數。</span>
          </div>
          <div className="flex items-center justify-center">
            <div>
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-white">
                <div className=" h-12 w-12 bg-[url('./imgs/one.png')] bg-cover bg-no-repeat"></div>
              </div>
              <div className="w-16 rounded-lg bg-black text-center text-lg text-white">
              Allen
              </div>
            </div>
          </div>
          <div className="col-span-7 m-2 h-14 items-center justify-center rounded-lg bg-white p-4 text-lg text-black font-medium">
          沒錯，如果小斯哥說的，我這邊已經把剛剛討論好的<span className="text-red-700 font-medium">點數</span>標上去囉～ 你來練習<span className="text-red-700 font-medium">把任務排到短衝待辦清單吧！</span>
          </div>
        </div>

        <BigButton
          className="absolute bottom-[10%] right-[10%] w-48"
          value={"接受挑戰"}
          to={"/f2e_week_3/task"}
        ></BigButton>
      </div>
    </>
  );
};

export default MemberPage;