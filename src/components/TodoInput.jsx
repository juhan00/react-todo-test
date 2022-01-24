import React from "react";

export const TodoInput = ({ inputText, onChangeInput, addTodo }) => {
  return (
    <div>
      <input type="text" value={inputText} onChange={onChangeInput} />
      <button onClick={addTodo}>등록</button>
    </div>
  );
};
