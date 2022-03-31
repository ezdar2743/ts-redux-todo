import { useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { addToDo } from "../redux/toDoReducer";
import ToDoList from "./toDoList";
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const Wrpper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.wrapBgColor};
  width: 500px;
  height: 800px;
  margin: 100px 30px;
  border-radius: 15px;
`;
const Title = styled.h1`
  font-size: 36px;
  margin-top: 30px;
`;
const Form = styled.form`
  margin-top: 50px;
`;
const Input = styled.input`
  width: 200px;
`;
const AddBtn = styled.button`
  color: ${(props) => props.theme.onText};
  background-color: tomato;
  padding: 3px 5px;
  font-size: 16px;
  border-radius: 5px;
  margin-left: 15px;
  border: none;
`;
const ToDoUl = styled.ul``;
interface IForm {
  ToDo: string;
}

const ToDoForm = () => {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const todos = useAppSelector((state) => state.toDo.todos);
  const dispatch = useAppDispatch();
  localStorage.setItem("ToDo", JSON.stringify(todos));
  const handleValid = (data: IForm) => {
    dispatch(addToDo(data.ToDo));

    setValue("ToDo", "");
  };

  return (
    <Container>
      <Wrpper>
        <Title>ToDoList</Title>
        <Form onSubmit={handleSubmit(handleValid)}>
          <Input
            placeholder="Write your To do"
            {...register("ToDo", { required: true, minLength: 1 })}
          />
          <AddBtn>add</AddBtn>
        </Form>
        <ToDoUl>
          {todos.map((data) => (
            <ToDoList {...data} key={data.id} />
          ))}
        </ToDoUl>
      </Wrpper>
    </Container>
  );
};

export default ToDoForm;
