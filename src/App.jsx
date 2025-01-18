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
import SingleTask from "./components/SingleTask";

export const TodosContext = createContext();

const currentDate = new Date();
const formatDate = currentDate.toLocaleDateString("en-US", {
  timeZoneName: "short",
});

const App = () => {
  const [startDate, setStartDate] = useState();
  const [name, setName] = useState("");
  // const [date, setDate] = useState("");

  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "name",
      tDate: formatDate,
      date: formatDate,
      status: "Not completed",
      isCompleted: false,
      checked: false,
    },
  ]);

  return (
    <TodosContext.Provider value={[tasks, setTasks]}>
      <>
        <Header></Header>
        <div className="home">
          <Sidebar></Sidebar>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/add" element={<Add />}></Route>
            <Route
              path="/today"
              element={<Today tasks={tasks}></Today>}
            ></Route>
            <Route
              path="/next7"
              element={<Next7 tasks={tasks}></Next7>}
            ></Route>
            <Route path="/all" element={<All tasks={tasks}></All>}></Route>
            <Route
              path="/status"
              element={<Status tasks={tasks}></Status>}
            ></Route>
            <Route path="/task" element={<SingleTask></SingleTask>}></Route>
          </Routes>
        </div>
      </>
    </TodosContext.Provider>
  );
};

export default App;
