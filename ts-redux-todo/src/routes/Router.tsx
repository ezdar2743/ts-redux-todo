import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../components/Nav";
import User from "./Pages/User";
import Shopping from "./Pages/Shopping";
import Todo from "./Pages/Todo";

const AllRouter = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Todo />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/shopping" element={<Shopping />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AllRouter;
