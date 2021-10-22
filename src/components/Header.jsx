import React from "react";
import todo from "../assets/todo.png";
import Form from "./Form";

const Header = ({handleSubmit,task,setTask, inputRef}) => {
  return (
    <header>
      <img src={todo} alt="logo" />
      <Form task={task} setTask={setTask}handleSubmit={handleSubmit} inputRef={inputRef}/>
    </header>
  );
};

export default Header;
