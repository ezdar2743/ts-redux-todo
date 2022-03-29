import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { addToDo } from "../redux/toDoReducer";
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const Wrpper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2c2c54;
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
interface IForm {
  ToDo: string;
}
interface IToDo {
  text: string;
  id: number;
  category: "TODO" | "DOING" | "DONE";
}

const ToDoForm = () => {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const todos = useAppSelector((state) => state.toDo.todos);
  const dispatch = useAppDispatch();
  const handleValid = (data: IForm) => {
    dispatch(addToDo(data.ToDo));
    setValue("ToDo", "");
  };
  console.log(todos);
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
      </Wrpper>
    </Container>
  );
};

export default ToDoForm;
