import React from "react";
import BigButton from "../components/button/BigButton";

const FinishPage = () => {
  return (
    <>
      <div className="relative h-[calc(100vh-2.5vh)] w-full">
        <div className="absolute top-0 right-0 h-60 w-96 bg-[url('./imgs/home/home_6.png')] bg-cover   bg-no-repeat"></div>
        <div className="absolute top-[10%] right-[30%] h-24 w-32 bg-[url('./imgs/home/home_3.png')]  bg-no-repeat"></div>
        <div className="absolute top-[40%] right-[15%] h-32 w-32 bg-[url('./imgs/home/home_4.png')]  bg-no-repeat"></div>
        <header className="h-14 ">
          <div className="m-4 h-14 w-60 bg-[url('./imgs/logo.png')] bg-no-repeat"></div>
        </header>

        <div className="absolute top-[30%] right-[30%] text-center text-2xl font-medium  text-white">
          恭喜通過 Scrum新手村！
          <br />
          正式加入六角資訊的開發 A 組。
          <br />
        </div>
        <div className="absolute bottom-[30%] left-[12%]  h-24 w-24 bg-[url('./imgs/home/home_1.png')]   bg-no-repeat"></div>
        <div className="absolute bottom-[10%] left-[32%]  h-24 w-32 bg-[url('./imgs/home/home_2.png')]   bg-no-repeat"></div>
        <div className="absolute bottom-0 left-0 h-48 w-96 bg-[url('./imgs/home/home_5.png')] bg-cover   bg-no-repeat"></div>
        <BigButton
          className="absolute bottom-[10%] right-[10%] w-48"
          value={"再來一次"}
          to={"/f2e_week_3/"}
        ></BigButton>
        <div className="absolute bottom-[0%] flex w-full justify-center bg-white content-center items-center">
          <div className=" m-4 h-12  w-36 items-center bg-[url('./imgs/jira.png')] bg-no-repeat"></div>
          <div className="m-2 h-8 w-60 items-center bg-[url('./imgs/confluence.png')] bg-no-repeat"></div>
        </div>
      </div>
    </>
  );
};

export default FinishPage;
