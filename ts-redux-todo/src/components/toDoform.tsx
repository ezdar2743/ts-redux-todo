import { useForm } from "react-hook-form";
import styled from "styled-components";
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

const ToDoForm = () => {
  const { register, handleSubmit, setValue } = useForm();

  return (
    <Container>
      <Wrpper>
        <Title>ToDoList</Title>
        <Form>
          <Input />
          <AddBtn>add</AddBtn>
        </Form>
      </Wrpper>
    </Container>
  );
};

export default ToDoForm;
