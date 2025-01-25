import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Add from "./components/Add";
import Home from "./components/Home";
import Today from "./components/Today";
import Edit from "./components/Edit";
import Status from "./components/Status";
import Next7 from "./components/Next7";
import Sidebar from "./components/Sidebar";

export const TodosContext = createContext();

const App = () => {
  const localData = localStorage.getItem("tasks");
  const data = JSON.parse(localData) || [];
  const [tasks, setTasks] = useState([]);

  return (
    <TodosContext.Provider value={[tasks, setTasks]}>
      <>
        <Header></Header>
        <div className="home">
          <Sidebar></Sidebar>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/add" element={<Add />}></Route>
            <Route path="/today" element={<Today></Today>}></Route>
            <Route path="/next7" element={<Next7></Next7>}></Route>
            <Route path="/edit" element={<Edit></Edit>}></Route>
            <Route path="/status" element={<Status></Status>}></Route>
          </Routes>
        </div>
      </>
    </TodosContext.Provider>
  );
};

export default App;
