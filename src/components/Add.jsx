import React, { useContext, useEffect, useState } from "react";
import { TodosContext } from "../App";
import { TfiTimer } from "react-icons/tfi";
import { TfiPlus } from "react-icons/tfi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

function Add() {
  const [tasks, setTasks] = useContext(TodosContext);
  const [date, setDate] = useState("");
  const [dateValue, setDateValue] = useState("");

  const currentDate = new Date();
  const formatDate = currentDate.toLocaleDateString("en-US", {
    timeZoneName: "short",
  });
  
  useEffect(() => {
    setDateValue(moment(date).format("MM-DD-YYYY"));
  }, [date, setDateValue]);

  const [name, setName] = useState("");
  console.log(moment(date, "MM-DD-YYYY"));
  const [err, setErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        name: name,
        tDate: `${formatDate}`,
        date: dateValue,
        status: "Not completed",
        isCompleted: false,
      },
    ]);
    // setName("");
    console.log("new tasks:", tasks);
    // setStartDate("");
  };
  return (
    <div className="bg-slate-950 home-page">
      <TfiPlus style={{ marginTop: "4px" }} /> &nbsp;&nbsp;<h3>ADD TASKS</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="task name"
          className="border"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <div className="">
          <label htmlFor="date">Due Date:</label>
          <br></br>
          <DatePicker
            selected={date}
            // value={startDate}
            onChange={(date) => setDate(date)}
            // showTimeSelect
            // dateFormat="Pp"
          />
        </div>
        <div className="buttonCont pt-5">
          <button
            type="submit"
            className="bg-transparent hover:bg-slate-500 text-slate-500 font-semibold hover:text-white py-2 px-4 border border-blue-550 hover:border-transparent rounded"
            value="Add"
          >
            click
          </button>
        </div>
      </form>
      {err && <div style={{ color: "red" }}>{err}</div>}
    </div>
  );
}

export default Add;
