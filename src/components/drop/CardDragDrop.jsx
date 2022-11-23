import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Draggable, DragDropContext, Droppable } from "react-beautiful-dnd";
import Card from "../card/Card";
import data from "./data.json"
const CardDragDrop = forwardRef((props, ref) => {
  const [items, setItems] = useState(data);
const [order, setOrder] =useState([]);
  const onDragEnd = (event) => {
    const { source, destination } = event;

    if (!destination) {
      return;
    }

    let newItems = [...items];

    const [remove] = newItems.splice(source.index, 1);

    newItems.splice(destination.index, 0, remove);
    
    setItems(newItems);
    setOrder(newItems.map(items=>items.id));
  };
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    array: order,
  }));
  console.log(inputRef.current);
  return (
    <div ref={inputRef} value={order}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId="drop-id"
          direction="horizontal"
          isCombineEnabled={false}
        >
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="flex justify-center"
            >
              {items.map((item, i) => (
                <div key={item.id}>
                  <Draggable draggableId={item.id} index={i} key={item.id}>
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className="flex"
                      >
                        <Card value={item.content} name={item.id}></Card>
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
    </div>
  );
});
export default CardDragDrop;
