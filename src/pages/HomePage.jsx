import React from "react";
import BigButton from "../components/button/BigButton";

const HomePage = () => {
  return (
    <>
      <div className="h-[calc(100vh-2.5vh)] w-full relative">

      <div className="w-96 h-60 bg-no-repeat bg-cover absolute top-0 right-0   bg-[url('./imgs/home/home_6.png')]"></div>
      <div className="w-32 h-24 bg-no-repeat absolute top-[10%] right-[30%]  bg-[url('./imgs/home/home_3.png')]"></div>
      <div className="w-32 h-32 bg-no-repeat absolute top-[40%] right-[15%]  bg-[url('./imgs/home/home_4.png')]"></div>
        <header className="h-14 ">
          <div className="w-60 h-14 m-4 bg-no-repeat bg-[url('./imgs/logo.png')]"></div>
        </header>

        <div className="font-medium text-white text-2xl absolute top-[30%] right-[30%]  text-left">
          哈囉，歡迎加入六角資訊，
          <br />
          在正式加入專案開發之前，
          <br />
          需要請你先了解 Scrum 的流程與精神！
          <br />
          請接受挑戰任務，成功通過 Scrum 新手村的挑戰任務吧！
          <br />
        </div>
        <div className="w-24 h-24 bg-no-repeat  absolute bottom-[30%] left-[12%]   bg-[url('./imgs/home/home_1.png')]"></div>
        <div className="w-32 h-24 bg-no-repeat  absolute bottom-[10%] left-[32%]   bg-[url('./imgs/home/home_2.png')]"></div>
        <div className="w-96 h-48 bg-no-repeat bg-cover absolute bottom-0 left-0   bg-[url('./imgs/home/home_5.png')]"></div>
        <BigButton className="absolute bottom-[10%] right-[10%] w-48" value={"開始挑戰"} to={"/f2e_week_3/todo"}></BigButton>
      </div>
    </>
  );
};

export default HomePage;
