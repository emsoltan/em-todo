// Convention is to import the external libraries, react, bootstrap etc on top of file first then our compponenet imports with a space line between.then CSS
import React, { useState, useRef, useEffect } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  const [task, setTask] = useState({ id: 0, task: "", done: false });
  const [tasks, setTasks] = useState([]);
  const [tasksDone, setTasksDone] = useState([]);
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // const [x,y]= useLocalStorage(key,date)

  useEffect(() => {
    let storage = localStorage.getItem("tasks");
    let storageItem = JSON.parse(storage);
    storageItem !== null && setTasks(storageItem);
    storage = null;
    storageItem = null;
    storage = localStorage.getItem("tasksDone");
    storageItem = JSON.parse(storage);
    storageItem !== null && setTasksDone(storageItem);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("tasksDone", JSON.stringify(tasksDone));
  }, [tasksDone]);
  const handleSubmit = (e) => {
    e.preventDefault();
    task.task.length > 0 && setTasks([...tasks, task]);
    inputRef.current.focus();
    setTask({ id: 0, task: "", done: false });
  };

  const handleDelete = (id, array) => {
    // setTasks(tasks.filter((item) => item.id !== id));
    const tempArray = array.filter((item) => item.id !== id);
    array === tasks ? setTasks(tempArray) : setTasksDone(tempArray)
  };
  const handleTick = (id, array) => {
    const tempTasks = array.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
        return task;
      } else {
        return task;
      }
    });
    const tasksArray = tempTasks.filter((task) => task.done === false);
    const doneArray = tempTasks.filter((task) => task.done === true);
    if (array === tasks) {
      setTasks(tasksArray);
      setTasksDone((prevDone) => [...prevDone, ...doneArray]);
    } else {
      setTasksDone(doneArray);
      setTasks((prevTasks) => [...prevTasks, ...tasksArray]);
    }
  };

  return (
    <main>
      <Header
        handleSubmit={handleSubmit}
        task={task}
        setTask={setTask}
        inputRef={inputRef}
      />
      <Section
        handleDelete={handleDelete}
        tasks={tasks}
        handleTick={handleTick}
        tasksDone={tasksDone}
        
      />
      <Footer />
    </main>
  );
};

export default App;
