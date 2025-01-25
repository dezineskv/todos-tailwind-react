import React, { useContext, useEffect, useState } from "react";
import { TodosContext } from "../App";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import toast, { Toaster } from "react-hot-toast";

function Add() {
  const [tasks, setTasks] = useContext(TodosContext);
  const [date, setDate] = useState("");
  const [dateValue, setDateValue] = useState("");

    const [todayDate, setTodayDate] = useState("");

  const [name, setName] = useState("");
  const [err, setErr] = useState("");

  const currentDate = new Date();
  const formatDate = currentDate.toLocaleDateString("en-US", {
    timeZoneName: "short",
  });

  useEffect(() => {
    setDateValue(moment(date).format("YYYY-MM-DD"));
  }, [date, setDateValue]);

  useEffect(() => {
    setTodayDate(moment(currentDate).format("YYYY-MM-DD"));
  }, [todayDate, setTodayDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && date) {
      setTasks([
        ...tasks,
        {
          id: tasks.length + 1,
          name: name,
          tDate: todayDate,
          date: dateValue,
          checked: false,
          status: 'pending'
        },
      ]);
      setName("");
      setDate("");
      setErr("");
    } else {
      setErr("Please provide task name & due date");
    }

    toast.success("Task successfully added", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };
  return (
    <div className="home-page add-form">
      <h3>ADD TASKS</h3>
      <div className="pt-top add-form">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-700 w-72">
          <div className="px-6 py-4">
            <div className="mb-2">
              <form onSubmit={handleSubmit}>
                <input
                  name="name"
                  placeholder="Add task name"
                  className="border-cyan-950"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                />
                <div className="" style={{color: 'white'}}>
                  <label htmlFor="date">Select due date:</label>
                  <br></br>
                  <DatePicker
                    selected={date}
                    placeholderText="Enter due date"
                    className="border-cyan-950"
                    onChange={(date) => setDate(date)}
                  />
                </div>
                <div className="buttonCont pt-5">
                  <button
                    type="submit"
                    className="bg-transparent hover:bg-slate-500 text-slate-500 font-semibold hover:text-white py-2 px-4 border border-blue-550 hover:border-transparent rounded"
                    value="Add"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {err && <div style={{ color: "red" }}>{err}</div>}
    </div>
  );
}

export default Add;
