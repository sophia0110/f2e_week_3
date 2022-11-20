import React from "react";
import { Draggable } from "react-beautiful-dnd";

const TackCard = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            className="m-2 grid h-80 w-52 grid-cols-3 gap-3 rounded-lg border-2 border-black bg-white"
            name={item.id}
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="col-span-3 text-center">
              <div className="h-12 w-12 text-5xl font-black text-black">
                {item.score}
              </div>
              <div className="h-12 w-12 bg-[url('./imgs/card/Spades.png')] bg-no-repeat "></div>
            </div>
            <div className="col-span-3 text-center text-lg font-bold text-black">
              {item.content}
            </div>
            <div className="col-start-3 col-end-3 text-center">
              <div className="h-12 w-12 bg-[url('./imgs/card/Spades_2.png')] bg-no-repeat "></div>
              <div className="h-16 w-12  text-5xl font-black text-black">
                {item.score}
              </div>
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};
export default TackCard;
