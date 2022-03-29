import React from "react";
import { useSelector } from "react-redux";
import ToDoForm from "../../components/toDoform";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

const Todo = () => {
  const todos = useAppSelector((state) => state.toDo.todos);
  const dispatch = useAppDispatch();
  return (
    <>
      <ToDoForm />
    </>
  );
};

export default Todo;
