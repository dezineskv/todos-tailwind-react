import React, { useContext, useState } from "react";
import { TodosContext } from "../App";
import { TfiTimer } from "react-icons/tfi";
import {
  TfiAgenda,
  TfiAlarmClock,
  TfiCalendar,
  TfiListOl,
  TfiLayoutListThumbAlt,
  TfiPlus,
  TfiSearch,
  TfiClip,
} from "react-icons/tfi";
import Dates from './Dates';

function Main() {
  const [tasks, setTasks] = useContext(TodosContext);
  const [input, setInput] = useState("");
  console.log(tasks);

  const currentDate = new Date();
  const formatDate = currentDate.toLocaleDateString("en-US", {
    timeZoneName: "short",
  });

  const handleSubmit = () => {
    setTasks((prev) => [
      ...prev,
      {
        id: tasks.length + 1,
        name: input,
        date: `${formatDate}`,
        dueDate: 'choose date',
        status: "Not completed",
        isCompleted: false,
      },
    ]);
    setInput("");
  };
  return (
    <div className="bg-slate-950 home-page">
      <TfiPlus style={{ marginTop: "4px" }} /> &nbsp;&nbsp;<h3>ADD TASKS</h3>
      <input
        className="border"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      ></input>
      <div className="buttonCont">
        <button
          className="bg-transparent hover:bg-slate-500 text-slate-500 font-semibold hover:text-white py-2 px-4 border border-blue-550 hover:border-transparent rounded"
          onClick={handleSubmit}
        >
          Save to Agenda
        </button>
      </div>
      <div className="home-page"></div>
      <Dates />
    </div>
  );
}

export default Main;
