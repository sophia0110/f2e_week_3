import React from "react";

const HomePage = () => {
  return (
    <>
      <header className="h-14 m-4">
        <div className="w-60 h-14 bg-no-repeat bg-[url('./imgs/logo.png')]"></div>
      </header>
      <div className="h-full w-full relative">
        <div className="font-medium text-white text-2xl absolute top-[30%] right-[25%]  text-left">
          哈囉，歡迎加入六角資訊，
          <br />
          在正式加入專案開發之前，
          <br />
          需要請你先了解 Scrum 的流程與精神！
          <br />
          請接受挑戰任務，成功通過 Scrum 新手村的挑戰任務吧！
          <br />
        </div>
        <div className="text-white bg-black m-4 p-8 rounded-2xl border-2 absolute bottom-[10%] right-[10%] w-48 text-2xl">開始挑戰</div>
      </div>
    </>
  );
};

export default HomePage;
