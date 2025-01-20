import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Add from "./components/Add";
import Home from "./components/Home";
import Today from "./components/Today";
import All from "./components/Edit";
import ShowAll from "./components/ShowAll";
import Status from "./components/Status";
import Next7 from "./components/Next7";
import Sidebar from "./components/Sidebar";
import EditTask from "./components/EditTask";
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";
export const TodosContext = createContext();
import { TfiCheck, TfiAlert } from "react-icons/tfi";

const currentDate = new Date();
const formatDate = currentDate.toLocaleDateString("en-US", {
  timeZoneName: "short",
});

const App = () => {
  const [startDate, setStartDate] = useState();
  const [name, setName] = useState("");
  const [checked, setChecked] = useState(false);
  const [todayTodo, setTodayTodo] = useState([]);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Task name",
      tDate: formatDate,
      date: formatDate,
      checked: false,
      // isCompleted: false,
      // checked: false,
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
            <Route
              path="/add"
              element={<Add tasks={tasks} setTasks={setTasks} />}
            ></Route>
            <Route
              path="/today"
              element={<Today tasks={tasks} setTasks={setTasks}></Today>}
            ></Route>
            <Route
              path="/next7"
              element={<Next7 tasks={tasks} setTasks={setTasks}></Next7>}
            ></Route>
            <Route
              path="/edit"
              element={<All tasks={tasks} setTasks={setTasks}></All>}
            ></Route>
            <Route
              path="/status"
              element={<Status tasks={tasks} setTasks={setTasks}></Status>}
            ></Route>
            <Route
              path="/task"
              element={<EditTask tasks={tasks} setTasks={setTasks}></EditTask>}
            ></Route>
            {/* <Route
              path="/show-all"
              element={<ShowAll tasks={tasks}></ShowAll>}
            ></Route> */}
          </Routes>
        </div>
      </>
    </TodosContext.Provider>
  );
};

export default App;
