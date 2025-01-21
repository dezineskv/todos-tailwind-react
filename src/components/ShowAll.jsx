import React, { useContext, useState } from "react";
import { TodosContext } from "../App";
import {
  TfiCalendar,
  TfiTimer,
  TfiPencil,
  TfiTrash,
  TfiClip,
} from "react-icons/tfi";
import { Link } from "react-router-dom";

function showAll() {
  const [tasks, setTasks] = useContext(TodosContext);
  const [startDate, setStartDate] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="bg-slate-950 home-page">
      <h3>All TASKS</h3>
      <p>Number of tasks: {tasks.length}</p>
      <div className="items-list">
        {tasks.map((task) => (
          <p key={task.id}>
            <div className="pt-5 pb-5">
              <TfiTimer />
              <div style={{ fontWeight: "bold" }}>Task: {task.name}</div>
              <div>
                <TfiCalendar />
                Date added: {task.tDate}
              </div>
              <br /> Due Date: {task.date}
              <TfiClip />
              Status: {task.checked}
              <br></br>
              <div>
                <Link to="/edit">
                  <TfiPencil />
                  EDIT
                </Link>
                <Link to="/edit">
                  <TfiTrash /> &nbsp; &nbsp; DELETE
                </Link>
              </div>
            </div>
          </p>
        ))}
      </div>
      <div></div>
    </div>
  );
}

export default showAll;
