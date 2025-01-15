import React, { useContext, useState } from "react";
import { TodosContext } from "../App";
import {
  TfiAgenda,
  TfiAlarmClock,
  TfiCalendar,
  TfiListOl,
  TfiLayoutListThumbAlt,
  TfiPlus,
  TfiSearch,
  TfiPencil,
  TfiTrash,
  TfiClip,
  TfiTimer,
} from "react-icons/tfi";

function All() {
  const [tasks, setTasks] = useContext(TodosContext);
  const [input, setInput] = useState("");
  console.log(tasks);

  const currentDate = new Date();
  const formatDate = currentDate.toLocaleDateString("en-US", {
    timeZoneName: "short",
  });

  return (
    <div className="bg-slate-950 home-page">
      <h3>ALL TASKS</h3>
      <div className="">
        {tasks.map((task) => (
          <p key={task.id}>
                        <div className="pt-5 pb-5 border-b">

            <TfiTimer />
            <div style={{ fontWeight: "bold" }}>Name: {task.name}</div>
            <div>
              <TfiCalendar />
              Date added: {task.date}
            </div>
            <br /> Due Date: {task.dueDate}
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
export default All;
