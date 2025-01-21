import React, { useContext, useEffect, useState } from "react";
import { TodosContext } from "../App";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";
import {
  TfiCalendar,
  TfiTimer,
  TfiPencil,
  TfiTrash,
  TfiClip,
  TfiCheck,
  TfiAlert,
  TfiPlus,
} from "react-icons/tfi";
import { FaBullseye } from "react-icons/fa6";

function Add() {
  const [tasks, setTasks] = useContext(TodosContext);
  const [date, setDate] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [checked, setChecked] = useState(false);

  const currentDate = new Date();
  const formatDate = currentDate.toLocaleDateString("en-US", {
    timeZoneName: "short",
  });

  useEffect(() => {
    setDateValue(moment(date).format("MM/DD/YYYY"));
  }, [date, setDateValue]);

  const [name, setName] = useState("");
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
        checked: FaBullseye,
        // isCompleted: false,
      },
    ]);
    setName("");
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
          <DatePicker selected={date} onChange={(date) => setDate(date)} />
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
