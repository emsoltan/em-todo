import React, {useContext} from "react";
import { v4 as uuidv4 } from "uuid";
import MyContext from "../context/MyContext"
const Form = () => {
  const context = useContext(MyContext)
  const { task, setTask, handleSubmit, inputRef }= context
  return (
    <form>
   
      <input
        type="text"
        value={task.task}
        maxLength="60"
        ref={inputRef}
        onChange={(e) =>
          setTask({ id: uuidv4(), task: e.target.value, done: false })
        }
      />
      <button onClick={handleSubmit}>+</button>
    </form>
  );
};

export default Form;
