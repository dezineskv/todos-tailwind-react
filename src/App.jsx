import React, { createContext, useState } from "react";
import Header from "./components/Header";
import { Main } from "./components/Main";
import './App.css';
import Sidebar from "./components/Sidebar";

export const TodosContext = createContext();

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "saved task",
    },
  ]);

  return (
    <TodosContext.Provider value={[tasks, setTasks]}>
      <Header></Header>
      <div className="home">
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
    </TodosContext.Provider>
  );
};

export default App;
