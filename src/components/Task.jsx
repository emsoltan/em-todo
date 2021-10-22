import React from "react";
import { FaTrashAlt } from "react-icons/fa";

import { BsCheckCircleFill } from "react-icons/bs";
const Task = ({ task, tasks, handleDelete, handleTick }) => {
  return (
    <div className="task-container">
      <div className="tick">
        <BsCheckCircleFill
          style={{
            fontSize: "25px",
          }}
          onClick={() => handleTick(task.id, tasks)} //Handle the tick functionality
        />
      </div>
      <div className="task">
        <p>{task.task}</p>
      </div>
      <div className="bin">
        <FaTrashAlt
          style={{ fontSize: "25px" }}
          onClick={() => handleDelete(task.id, tasks)}
        />
      </div>
    </div>
  );
};

export default Task;
