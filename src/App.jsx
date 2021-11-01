// Convention is to import the external libraries, react, bootstrap etc on top of file first then our compponenet imports with a space line between.then CSS
import React , {useContext} from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import MyProvider from "./context/MyProvider"
import MyContext from "./context/MyContext"

import "./App.css";

const App = () => {
  const context = useContext(MyContext)
  const {task,setTask,inputRef,handleDelete,tasks,handleTick,tasksDone,handleSubmit} = context
  

  return (
    <MyProvider>
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
    </MyProvider>
  );
};

export default App;
