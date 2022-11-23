import React, { useState} from "react";
import { FiMove } from "react-icons/fi";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import clsx from "clsx";
import { nanoid } from "nanoid";
const SprintDrop = ({ content, bgColor, borderColor }) => {
  const [itemObj, setItemObj] = useState({
    productBacklog: {
      items: [
        {
          content: content,
          id: nanoid(),
          bgColor: bgColor,
          borderColor: borderColor,
        },
      ],
    },
    sprintList: {
      items: [],
    },
  });


  const onDragEnd = (event) => {
    const { source, destination } = event;

    if (!destination) {
      return;
    }

    let newItemObj = { ...itemObj };

    const [remove] = newItemObj[source.droppableId].items.splice(
      source.index,
      1
    );

    newItemObj[destination.droppableId].items.splice(
      destination.index,
      0,
      remove
    );

    setItemObj(newItemObj);

  };
  return (
    <>
      <div>
        <DragDropContext onDragEnd={onDragEnd} >
          <div >
            <Droppable
              droppableId="productBacklog"
              direction="horizontal"
              isCombineEnabled={false}
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className=" m-2 flex h-full pt-2 justify-center"
                >
                  {itemObj.productBacklog.items.map((item, index) => (
                    <Draggable
                      draggableId={item.id}
                      index={index}
                      key={item.id}
                    >
                      {(provided, snapshot) => {
                        return (
                          <div
                            className={clsx(
                              " m-2 flex content-center items-center rounded-lg p-4 text-center text-xl text-white",
                              item.bgColor
                            )}
                            name={item.id}
                            ref={provided.innerRef}
                            snapshot={snapshot}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {item.content}
                            <FiMove className="mt-2 ml-2 items-start" />
                          </div>
                        );
                      }}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          <div>
            <Droppable
              droppableId="sprintList"
              direction="horizontal"
              isCombineEnabled={false}
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={clsx(
                    "flex h-[16vh] justify-center rounded-lg border-4 p-2 m-4 border-dashed",
                    borderColor
                  )}
                >
                  {itemObj.sprintList.items.map((item, index) => (
                    <Draggable
                      draggableId={item.id}
                      index={index}
                      key={item.id}
                    >
                      {(provided, snapshot) => {
                        return (
                          <div
                            className={clsx(
                              "m-2 rounded-lg p-4 text-center text-xl text-white",
                              item.bgColor
                            )}
                            name={item.id}
                            ref={provided.innerRef}
                            snapshot={snapshot}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {item.content}
                          </div>
                        );
                      }}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </div>
    </>
  );
};
export default SprintDrop;
