import React, { useState } from "react";
import { Draggable, DragDropContext, Droppable } from "react-beautiful-dnd";

const CardDragDrop = () => {
  const [items, setItems] = useState(["A", "B", "C", "D"]);
  const onDragEnd = (event) => {
    console.log(event);
    const { source, destination } = event;

    if (!destination) {
      return;
    }

    // 拷貝新的items (來自state)
    let newItems = [...items];

    // splice(start, deleteCount, item )
    // 從source.index剪下被拖曳的元素
    const [remove] = newItems.splice(source.index, 1);

    //在destination.index位置貼上被拖曳的元素
    newItems.splice(destination.index, 0, remove);

    // 設定新的 items
    setItems(newItems);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="drop-id">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {items.map((item, i) => (
              <div key={item}>
                <Draggable draggableId={item.toString()} index={i} key={item}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {item}
                      <Card />
                    </div>
                  )}
                </Draggable>
              </div>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
export default CardDragDrop;
