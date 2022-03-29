import { RootState } from "./store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IToDo {
  text: string;
  id: number;
  category: string;
}

interface ISlice {
  todos: IToDo[];
}
const initialState: ISlice = {
  todos: [],
};
export const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    addToDo: (state, action: PayloadAction) => {},
  },
});
export const selectToDo = (state: RootState) => state.toDo.todos;
export default toDoSlice.reducer;
