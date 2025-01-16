import React, { useContext, useState } from "react";
import { TodosContext } from "../App";
import {
  TfiCalendar,
  TfiPencil,
  TfiTrash,
  TfiClip,
  TfiTimer,
} from "react-icons/tfi";

function Status({date}) {
  const [tasks, setTasks] = useContext(TodosContext);
  const [input, setInput] = useState("");
  console.log(tasks);
  const [startDate, setStartDate] = useState("");

  const currentDate = new Date();
  const formatDate = currentDate.toLocaleDateString("en-US", {
    timeZoneName: "short",
  });
  

  return (
    <div className="bg-slate-950 home-page">
      <h3>TASKS BY STATUS</h3>
      <div className="">
        {tasks.map((task) => (
          <p key={task.id}>
            <div className="pt-5 pb-5 border-b">
              <TfiTimer />
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

export default Status;
