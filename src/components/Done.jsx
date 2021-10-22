import React from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";

const Done = ({ task, tasksDone, handleDelete, handleTick }) => {
  return (
    <div className="task-container">
      <div className="tick">
        <BsArrowUpCircleFill
          style={{
            fontSize: "30px",
          }}
          onClick={() => handleTick(task.id, tasksDone)} //Handle the tick functionality
        />
      </div>
      <div className="task">
        <p
          style={{
            textDecorationLine: "line-through",
            textDecorationColor: "#264653",
            textDecorationThickness: "3px",
            fontStyle: "italic",
            fontWeight: "bold",
            border: "1px solid white",
          }}
        >
          {task.task}
        </p>
      </div>
      <div className="bin">
        <FaTrashAlt
          style={{ fontSize: "30px" }}
          onClick={() => handleDelete(task.id, tasksDone)}
        />
      </div>
    </div>
  );
};

export default Done;
