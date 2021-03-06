import React, { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import MyContext from "../context/MyContext";
const Task = ({task}) => {
  const context = useContext(MyContext);
  const { tasks, handleDelete, handleTick } = context;
  return (
    <div className="task-container">
      <div className="tick">
        <BsCheckCircleFill
          style={{
            fontSize: "25px",
            color: "#264653",
          }}
          onClick={() => handleTick(task.id, tasks)} //Handle the tick functionality
        />
      </div>
      <div className="task">
        <p>{task.task}</p>
      </div>
      <div className="bin">
        <FaTrashAlt
          style={{ fontSize: "25px", color: "tomato" }}
          onClick={() => handleDelete(task.id, tasks)}
        />
      </div>
    </div>
  );
};

export default Task;
