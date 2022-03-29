import { configureStore } from "@reduxjs/toolkit";
import bgModeReducer from "./bgModeReducer";
import toDoReducer from "./toDoReducer";

export const store = configureStore({
  reducer: {
    toDo: toDoReducer, //
    modeChage: bgModeReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
