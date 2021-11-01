import React, {useContext} from "react";
import todo from "../assets/todo.png";
import Form from "./Form";
import MyContext from "../context/MyContext"

const Header = () => {
  const context = useContext(MyContext);
  const {handleSubmit,task,setTask, inputRef} = context;
  return (
    <header>
      <img src={todo} alt="logo" />
      <Form task={task} setTask={setTask}handleSubmit={handleSubmit} inputRef={inputRef}/>
    </header>
  );
};

export default Header;
