import { RootState } from "./store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IToDo {
  text: string;
  id: number;
  category: "TODO" | "DOING" | "DONE";
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
    addToDo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        text: action.payload,
        id: Date.now(),
        category: "TODO",
      });
    },
  },
});
export const selectToDo = (state: RootState) => state.toDo.todos;
export default toDoSlice.reducer;
export const { addToDo } = toDoSlice.actions;
