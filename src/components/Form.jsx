import React from "react";
import { v4 as uuidv4 } from "uuid";
const Form = ({ task, setTask, handleSubmit, inputRef }) => {
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
