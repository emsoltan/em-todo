import React, {useContext} from "react";
import TaskContainer from "./TaskContainer";
import DoneContainer from "./DoneContainer";
import MyContext from "../context/MyContext"
const Section = () => {
  const context = useContext(MyContext)
  const { tasks, handleDelete, handleTick, tasksDone } = context
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
