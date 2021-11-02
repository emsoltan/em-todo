import React from "react";
import todo from "../assets/todo.png";
import Form from "./Form";

const Header = () => {

  return (
    <header>
      <img src={todo} alt="logo" />
      <Form />
    </header>
  );
};

export default Header;
