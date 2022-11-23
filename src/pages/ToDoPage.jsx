import React, { useRef, useState } from "react";
import CardDragDrop from "../components/drop/CardDragDrop";
import AlertDialog from "../components/dialog/AlertDialog";
import BigButton from "../components/button/BigButton";
const ToDoPage = () => {
  const getValue = useRef();
  const [isAnswer, setIsAnswer] = useState(false);
  const onButtonClick = () => {
    const order = getValue.current.array;
    const answer = "D,C,B,A";
    if (order.toString() === answer) {
      setIsAnswer(true);
    } else {
      setIsAnswer(false);
    }
  };

  return (
    <>
      <div className="relative h-[calc(100vh-4vh)] w-full">
        <div className="absolute top-[3%] right-[5%] h-64 w-48 bg-[url('./imgs/chips_1.png')]  bg-no-repeat"></div>
        <div className="flex h-full w-full items-start justify-center ">
          <div className="grid justify-items-center ">
            <div className="align-content mt-4 flex w-96 justify-between rounded-t-lg border-4 border-white bg-red-800 p-4 font-medium text-white">
              <div className="text-2xl">用 </div>
              <div className="text-3xl">拖移</div>
              <div className="text-2xl">的方式調整優先順序</div>
            </div>
            <div className="flex justify-between">
              <div className="absolute top-[35%] left-[10%] text-3xl text-white">
                產品清單
              </div>
              <div className="h-full w-full rounded-lg border-4 border-white p-4 text-center text-2xl font-medium text-white">
                <CardDragDrop ref={getValue} />
              </div>
            </div>

            <div className="align-content flex w-[48rem] justify-between rounded-b-lg border-4 border-white bg-black p-4 text-center font-medium text-white">
              <div className="text-3xl">高←</div>
              <div className="text-3xl">優先權</div>
              <div className="text-3xl">→低</div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[10%] left-[8%]  h-24 w-24 bg-[url('./imgs/dice.png')] bg-no-repeat"></div>
      </div>
      <div onClick={onButtonClick} className="m-0">
        {isAnswer ? (
          <BigButton
            className="absolute bottom-[10%] right-[10%] "
            value={"前往下一關"}
            to={"/f2e_week_3/member"}
          ></BigButton>
        ) : (
          <AlertDialog
            val={"哦歐！排序錯誤，請再調整順序"}
          ></AlertDialog>
        )}
      </div>
    </>
  );
};

export default ToDoPage;
