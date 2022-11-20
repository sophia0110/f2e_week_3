import React, { useState, forwardRef } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TackCard from "../card/TaskCard";
import { nanoid } from "nanoid";
import AlertDialog from "../dialog/AlertDialog";
import BigButton from "../button/BigButton";
import clsx from "clsx";
const TaskDragDrop = forwardRef((props, ref) => {
  const [itemObj, setItemObj] = useState({
    productBacklog: {
      items: [
        {
          content: "前台職缺列表（職缺詳細內容、點選可發送應徵意願）",
          id: nanoid(),
          score: 5,
        },
        { content: "應徵者的線上履歷編輯器", id: nanoid(), score: 13 },
        { content: "會員系統（登入、註冊、權限管理）", id: nanoid(), score: 8 },
        {
          content: "後台職缺管理功能（資訊上架、下架、顯示應徵者資料）",
          id: nanoid(),
          score: 8,
        },
      ],
    },
    sprintList: {
      items: [],
    },
  });

  const [totalScoreSum, setTotalScoreSum] = useState(0);

  const onDragEnd = (event) => {
    const { source, destination } = event;

    if (!destination) {
      return;
    }

    // 拷貝新的items (來自state)
    let newItemObj = { ...itemObj };

    // splice(start, deleteCount, item )
    // 從source剪下被拖曳的元素
    const [remove] = newItemObj[source.droppableId].items.splice(
      source.index,
      1
    );

    // 在destination位置貼上被拖曳的元素
    newItemObj[destination.droppableId].items.splice(
      destination.index,
      0,
      remove
    );

    // set state新的 itemObj
    setItemObj(newItemObj);

    // 計算sprint內的分數總和
    const newTotalScoreSum = newItemObj.sprintList.items.reduce(
      (acc, val) => acc + val.score,
      0
    );
    setTotalScoreSum(newTotalScoreSum);
  };
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-6 gap-3">
          <div className=" flex items-center justify-center text-3xl text-white">
            產品清單
          </div>
          <Droppable
            droppableId="productBacklog"
            direction="horizontal"
            isCombineEnabled={false}
          >
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="col-span-4 m-2 flex h-full pt-2"
              >
                {itemObj.productBacklog.items.map((item, index) => (
                  <TackCard item={item} index={index} key={item.id} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>

        <div className="grid grid-cols-6 gap-3">
          <div className=" flex items-center pt-2 text-3xl text-white text-center">
            開發 A 組 <br />
            短衝待辦清單
          </div>
          <Droppable
            droppableId="sprintList"
            direction="horizontal"
            isCombineEnabled={false}
          >
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="col-span-4 flex h-[50vh] justify-center rounded-lg border-4 border-white p-2"
              >
                {itemObj.sprintList.items.map((item, index) => (
                  <TackCard item={item} index={index} key={item.id} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <div>
            <p className="text-white text-2xl">
              {`目前點數: ${totalScoreSum}/20`}
            </p>
            <p className="text-red-700">
              {totalScoreSum > 20 && "點數已超出上限，請移除一些項目"}
            </p>
          </div>
        </div>
        { totalScoreSum > 20 ? (
          <AlertDialog
            to={"/f2e_week_3/member"}
            val={"超過20點，請再調整清單"}
          ></AlertDialog>
        ) : (
          <BigButton
            className={clsx('absolute bottom-[10%] right-[10%] w-48',totalScoreSum <= 0?'hidden':'')}
            value={"準備好了！開始 Sprint"}
            to={"/f2e_week_3/guide"}
          ></BigButton>
        )}
      </DragDropContext>
    </>
  );
});
export default TaskDragDrop;
