import React from "react";

export const TodoItem = ({
  provided, //dnd props
  todo,
  index,
  changeState,
  editTodo,
  changeEditState,
  deleteState,
}) => {
  return (
    <li
      key={todo.id}
      ref={provided.innerRef} //dnd ref
      {...provided.draggableProps} //dnd props
      {...provided.dragHandleProps} //dnd props
    >
      <input
        type="checkbox"
        checked={todo.state ? true : false}
        onChange={() => {
          changeState(todo.id);
        }}
      />
      <span className="list">
        {index + ` : `}
        {!todo.editState ? (
          todo.text
        ) : (
          <input
            type="text"
            value={todo.text}
            onChange={(event) => {
              editTodo(event, todo.id);
            }}
          />
        )}
      </span>
      {!todo.editState ? (
        <span className="button">
          <a
            href="#none"
            onClick={() => {
              changeEditState(todo.id);
            }}
          >
            수정
          </a>
          <a
            href="#none"
            onClick={() => {
              deleteState(todo.id);
            }}
          >
            삭제
          </a>
        </span>
      ) : (
        <span className="button">
          <a
            href="#none"
            onClick={() => {
              changeEditState(todo.id);
            }}
          >
            저장
          </a>
        </span>
      )}
    </li>
  );
};
