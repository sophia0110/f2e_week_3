import React from "react";
import BigButton from "../components/button/BigButton";

const ProcessPage = () => {
  return (
    <>
      <div className="relative h-[calc(100vh-2.5vh)] w-full">
        <div className="grid grid-cols-10 gap-1 m-4">
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
            等等等等等，你都還不知道什麼是Sprint吧！讓我先為你介紹一下~仔細聽好，等等會考考你！
          </div>

          <div className="col-start-2 col-end-11 m-2 content-center items-center rounded-lg bg-white p-4 text-xl text-black">
            Sprint是一個短衝，開發團隊會在這期間執行開發。在這段期間內，開發團隊舉辦
            每日站立會議(Daily Scrum)，追蹤成員間的工作狀況，除了
            <span className="font-medium text-red-700">每日站立會議</span>
            ，在Sprint的結束也會包含
            <span className="font-medium text-red-700">
              短衝檢視會議(Sprint Review)
            </span>
            、
            <span className="font-medium text-red-700">
              短衝自省會議(Sprint Retrospective)
            </span>
            。
          </div>
          <div className="col-start-2 col-end-11 m-2 flex content-center items-center rounded-lg bg-white p-4 text-xl text-black">
            推薦工具：
            <div className="m-2 h-8 w-60 items-center bg-[url('./imgs/confluence.png')] bg-no-repeat"></div>
          </div>
          <div className="col-start-2 col-end-5 m-2 rounded-lg bg-red-700 p-4 text-center text-xl text-white">
            每日站立會議(Daily Scrum)
          </div>
          <div className="col-start-5 col-end-8 m-2 rounded-lg bg-yellow-500 p-4 text-center text-xl text-white">
            短衝檢視會議(Sprint Review)
          </div>
          <div className="col-start-8 col-end-11 m-2 rounded-lg bg-green-600 p-4 text-center text-xl text-white">
            短衝自省會議(Sprint Retrospective)
          </div>
          <div className="col-start-2 col-end-5 m-2 text-white">
            <ul className="list-disc">
              每天都要進行的會議，以15分鐘為限制
              <li className="ml-4">
                昨天為團隊的短衝目標(Sprint Goal)做了那些進度
              </li>
              <li className="ml-4">今天我會如何準備來幫助團隊達到短衝目標</li>
              <li className="ml-4">過程中有遇到什麼問題、難題</li>
              透過團隊分享，追蹤大家的工作狀況。
            </ul>
          </div>
          <div className="col-start-5 col-end-8 m-2 text-white">
            <ul>用來檢視該次短衝增量的成 果，以蒐集相關的回饋數據 或意見。</ul>
          </div>
          <div className="col-start-8 col-end-11 m-2 text-white">
            <ul className="list-disc">
              團隊在自省會議裡, 會共同回顧該短衝歷程發生的事情
              <li className="ml-4">好的地方</li>
              <li className="ml-4">可以改進的地方</li>
              <li className="ml-4">如何維持我們已有的成功經驗</li>
              優化工作流程、讓團隊有變得更好的機會。
            </ul>
          </div>
        </div>

        <BigButton
          className="absolute bottom-[5%] right-[5%] w-48"
          value={"我了解了"}
          to={"/f2e_week_3/test"}
        ></BigButton>
      </div>
    </>
  );
};

export default ProcessPage;
