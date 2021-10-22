import React from "react";
import TaskContainer from "./TaskContainer";
import DoneContainer from "./DoneContainer";
const Section = ({ tasks, handleDelete, handleTick, tasksDone }) => {
  return (
    <section>
      <TaskContainer
        tasks={tasks}
        handleDelete={handleDelete}
        handleTick={handleTick}
      />
      <DoneContainer tasksDone = {tasksDone} handleTick={handleTick} handleDelete={handleDelete} />
    </section>
  );
};

export default Section;
