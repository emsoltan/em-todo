import React, { useContext } from "react";
import Done from "./Done";
import MyContext from "../context/MyContext";
const DoneContainer = () => {
  const context = useContext(MyContext);
  const { tasksDone, handleDelete, handleTick } = context;
  return (
    <aside>
      <h3 class="done-title">Completed Tasks</h3>
      {tasksDone.length > 0 ? (
        tasksDone.map((task) => (
          <Done
            key={task.id}
            task={task}
            tasksDone={tasksDone}
            handleDelete={handleDelete}
            handleTick={handleTick}
          />
        ))
      ) : (
        <h2>No Completed Tasks</h2>
      )}
    </aside>
  );
};

export default DoneContainer;
