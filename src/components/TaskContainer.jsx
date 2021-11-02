import React, { useContext } from "react";
import Task from "./Task";
import MyContext from "../context/MyContext";

const TaskContainer = () => {
  const context = useContext(MyContext);
  const { tasks} = context;
  return (
    <aside className="TaskContainer">
      <h3 className="to-do-title">To-Do: </h3>

      {tasks.length > 0 ? (
        tasks.map((task) => <Task key={task.id} task={task} />)
      ) : (
        <h2>Dolce far niente!</h2>
      )}
    </aside>
  );
};

export default TaskContainer;
