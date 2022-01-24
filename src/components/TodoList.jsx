import React from "react";
import { TodoItem } from "./TodoItem";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export const TodoList = (props) => {
  const onDragEndHandeler = (result) => {
    // console.log(result.source);
    // console.log(result.destination);
    if (result.destination) {
      const startTagIndex = result.source.index;
      const destinationTagIndex = result.destination.index;

      props.setDrageTodoItem(startTagIndex, destinationTagIndex);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEndHandeler}>
      <Droppable droppableId="droppableLists" direction="vertical">
        {(provided) => {
          return (
            <ul
              {...provided.droppableProps} //dnd props
              ref={provided.innerRef} //dnd ref
            >
              {props.todos !== "" &&
                props.todos.map((todo, index) => (
                  <Draggable
                    key={todo.id}
                    draggableId={`${todo.id}`}
                    index={index}
                  >
                    {(provided) => (
                      <TodoItem
                        provided={provided} //dnd props
                        todo={todo}
                        index={index}
                        changeState={props.changeState}
                        editTodo={props.editTodo}
                        changeEditState={props.changeEditState}
                        deleteState={props.deleteState}
                      />
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </ul>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};
