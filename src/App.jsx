import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Add from "./components/Add";
import Home from "./components/Home";
import Today from "./components/Today";
import All from "./components/All";
import Status from "./components/Status";
import Next7 from "./components/Next7";
import Sidebar from "./components/Sidebar";

export const TodosContext = createContext();

const currentDate = new Date();
const formatDate = currentDate.toLocaleDateString("en-US", {
  timeZoneName: "short",
});

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Saved Task",
      date: formatDate,
      status: 'Not completed',
      isCompleted: false,
    },
  ]);

  return (
    <TodosContext.Provider value={[tasks, setTasks]}>
      <Header></Header>
      <div className="home">
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/today" element={<Today></Today>}></Route>
          <Route path="/next7" element={<Next7></Next7>}></Route>
          <Route path="/all" element={<All></All>}></Route>
          <Route path="/status" element={<Status></Status>}></Route>
        </Routes>
      </div>
    </TodosContext.Provider>
  );
};

export default App;
