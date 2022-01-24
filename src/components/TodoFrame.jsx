import React, { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export const TodoFrame = (props) => {
  const initialTodos = [
    {
      id: "1hsh234",
      text: "출석체크",
      state: false,
      editState: false,
    },
    {
      id: "1sdg2345",
      text: "운동하기",
      state: false,
      editState: false,
    },
    {
      id: "123fdgdf456",
      text: "글쓰기",
      state: true,
      editState: false,
    },
    {
      id: "13sagd234",
      text: "공부하기",
      state: false,
      editState: false,
    },
    {
      id: "123fdg45",
      text: "놀기",
      state: false,
      editState: false,
    },
    {
      id: "123ag456",
      text: "게임하기",
      state: true,
      editState: false,
    },
  ];

  const [todos, setTodos] = useState(initialTodos);
  const [inputText, setInputText] = useState("");

  const createId = function () {
    return Math.random().toString(36).substr(2, 16);
  };

  const onChangeInput = (event) => {
    setInputText(event.target.value);
  };

  const addTodo = (event) => {
    if (inputText !== "") {
      const newId = createId();
      setTodos([
        ...todos,
        { id: newId, text: inputText, state: false, editState: false },
      ]);
      setInputText("");
    } else {
      alert("내용을 입력 해주세요.");
    }
  };

  const editTodo = (event, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: event.target.value } : todo
      )
    );
  };

  const changeState = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, state: !todo.state } : todo
      )
    );
  };

  const changeEditState = (id) => {
    const [editInputText] = todos
      .filter((todo) => todo.id === id)
      .map((todo) => todo.text);

    if (editInputText !== "") {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, editState: !todo.editState } : todo
        )
      );
    } else {
      alert("내용을 입력 해주세요.");
    }
  };

  const deleteState = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const setDrageTodoItem = (startTagIndex, destinationTagIndex) => {
    const startTagValue = todos[startTagIndex];
    const startTagArray = todos.filter((todo) => todo.id === startTagValue.id);
    const todoArray = todos.filter((todo) => todo.id !== startTagValue.id);
    todoArray.splice(destinationTagIndex, 0, ...startTagArray);
    setTodos([...todoArray]);
  };

  return (
    <div className="todo-frame">
      <TodoInput
        inputText={inputText}
        onChangeInput={onChangeInput}
        addTodo={addTodo}
      />
      <TodoList
        setDrageTodoItem={setDrageTodoItem} //dnd set
        todos={todos}
        inputText={inputText}
        changeState={changeState}
        editTodo={editTodo}
        changeEditState={changeEditState}
        deleteState={deleteState}
      />
    </div>
  );
};
