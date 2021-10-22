import React from "react";
import Task from "./Task";

const TaskContainer = ({tasks, handleDelete, handleTick}) => {
    return (
      <aside>
        <h3 className="to-do-title">To-Do: </h3>
        
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <Task key={task.id} task={task} tasks={tasks} handleDelete={handleDelete} handleTick ={handleTick}/>
            ))
          ) : (
            <h2>Dolce far niente!</h2>
          )}
        
      </aside>
    );
}


export default TaskContainer;
