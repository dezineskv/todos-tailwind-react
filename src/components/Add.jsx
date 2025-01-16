import React, { useContext, useState } from "react";
import { TodosContext } from "../App";
import { TfiTimer } from "react-icons/tfi";
import {
  TfiPlus,
} from "react-icons/tfi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Add() {
  const [tasks, setTasks] = useContext(TodosContext);
  const [input, setInput] = useState("");
  console.log(tasks);

  const date = new Date();
  const due = date.toLocaleDateString("en-US", {
    timeZoneName: "short",
  });
  const [startDate, setStartDate] = useState();

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
        tDate: `${formatDate}`,
        date: due,
        status: "Not completed",
        isCompleted: false,
      },
    ]);
    setInput("");
    setStartDate(startDate);
  };
  return (
    <div className="bg-slate-950 home-page">
      <TfiPlus style={{ marginTop: "4px" }} /> &nbsp;&nbsp;<h3>ADD TASKS</h3>
      {/* <form onSubmit={handleSubmit}></form> */}
      <input
        placeholder="task name"
        className="border"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      ></input>
      <div className="">
        <label htmlFor="date">Due Date:</label>
        <br></br>
        <DatePicker
          selected={startDate}
          // value={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          dateFormat="Pp"
        />
      </div>
      <div className="buttonCont pt-5">
        <button
          className="bg-transparent hover:bg-slate-500 text-slate-500 font-semibold hover:text-white py-2 px-4 border border-blue-550 hover:border-transparent rounded"
          onClick={handleSubmit}
        >
          Save to Agenda
        </button>
      </div>
    </div>
  );
}

export default Add;
