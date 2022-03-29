import { BrowserRouter, Routes, Route } from "react-router-dom";
import Doing from "./Pages/Doing";
import Done from "./Pages/Done";
import Todo from "./Pages/Todo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />}></Route>
        <Route path="/doing" element={<Doing />}></Route>
        <Route path="/done" element={<Done />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
