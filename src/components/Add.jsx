import React, { useContext, useEffect, useState } from "react";
import { TodosContext } from "../App";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Successfully added!");

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
        checked: false,
      },
    ]);
    setName("");
    setDate("");
  };
  return (
    <div className="bg-slate-950 home-page card-cont">
      <h3>ADD TASKS</h3>
      <div className="pt-top">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="mb-2">
              <form onSubmit={handleSubmit}>
                <input
                  name="name"
                  placeholder="add task name"
                  className="border-cyan-950"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                />
                <div className="">
                  <label htmlFor="date">Select due date:</label>
                  <br></br>
                  <DatePicker
                    selected={date}
                    className="border-cyan-950"
                    onChange={(date) => setDate(date)}
                  />
                </div>
                <div className="buttonCont pt-5">
                  <button
                    type="submit"
                    className="bg-transparent hover:bg-slate-500 text-slate-500 font-semibold hover:text-white py-2 px-4 border border-blue-550 hover:border-transparent rounded"
                    value="Add"
                    onClick={notify}
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
