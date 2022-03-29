import React from "react";
import styled from "styled-components";
import { useAppDispatch } from "../redux/hook";
import { deleteToDo } from "../redux/toDoReducer";

const Container = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 24px;
  margin-right: 30px;
`;
const DeleteBtn = styled.button`
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme.onText};
  background-color: tomato;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.lineText};
  }
`;

interface IpropsType {
  text: string;
  id: number;
}

const ToDoList = ({ text, id }: IpropsType) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <Container>
        <Title>{text}</Title>
        <DeleteBtn onClick={() => dispatch(deleteToDo(id))}>delete</DeleteBtn>
      </Container>
    </>
  );
};

export default ToDoList;
