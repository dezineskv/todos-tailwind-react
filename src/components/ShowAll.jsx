import React, { useContext, useState } from "react";
import { TodosContext } from "../App";
import {
  TfiCalendar,
  TfiTimer,
  TfiPencil,
  TfiTrash,
  TfiClip,
} from "react-icons/tfi";

function showAll() {
  const [tasks, setTasks] = useContext(TodosContext);

  console.log(tasks);
  const [startDate, setStartDate] = useState("");
  const [name, setName] = useState("");

  // const currentDate = new Date();
  // const formatDate = currentDate.toLocaleDateString("en-US", {
  //   timeZoneName: "short",
  // });

  return (
    <div className="bg-slate-950 home-page">
      <h3>All TASKS</h3>
      <p>Number of tasks: {tasks.length}</p>
      <div className="">
        {tasks.map((task) => (
          <p key={task.id}>
            <div className="pt-5 pb-5 border-b">
              <TfiTimer />
              <div style={{ fontWeight: "bold" }}>Task: {task.name}</div>
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
      <div></div>
    </div>
  );
}

export default showAll;
