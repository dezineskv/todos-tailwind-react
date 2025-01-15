import React, { useContext, useState } from "react";
import { TodosContext } from "../App";
import {
  TfiCalendar,
  TfiTimer,
  TfiPencil,
  TfiTrash,
  TfiClip,
} from "react-icons/tfi";

function Today({ date }) {
  const [tasks, setTasks] = useContext(TodosContext);
  const [input, setInput] = useState("");
  console.log(tasks);
  const [startDate, setStartDate] = useState("");

  return (
    <div className="bg-slate-950 home-page">
      <h3>TODAY'S TASKS</h3>
      <div className="">
        {tasks.map((task) => (
          <p key={task.id}>
            <div className="pt-5 pb-5 border-b">
              <TfiTimer />{" "}
              <div style={{ fontWeight: "bold" }}>Name: {task.name}</div>
              <div>
                <TfiCalendar />
                Date added: {task.tDate}
              </div>
              <br /> Due Date: {task.date}
              <TfiClip />
              Status: {task.status}
            </div>
          </p>
        ))}
      </div>
      <div>
        <TfiPencil />
        Edit <TfiTrash /> Delete
      </div>
    </div>
  );
}

export default Today;
