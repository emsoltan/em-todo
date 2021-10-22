import React from "react";
import Done from "./Done";
const DoneContainer = ({tasksDone, handleDelete, handleTick}) => {
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
