import React, { useContext, useState } from "react";
import { TodosContext } from "../App";
import {
  TfiCalendar,
  TfiTimer,
  TfiPencil,
  TfiTrash,
  TfiClip,
} from "react-icons/tfi";

function Next7() {
  const [tasks, setTasks] = useContext(TodosContext);
  const [input, setInput] = useState("");
  console.log(tasks);

  const currentDate = new Date();
  const formatDate = currentDate.toLocaleDateString("en-US", {
    timeZoneName: "short",
  });

  return (
    <div className="bg-slate-950 home-page">
      <h3>NEXT 7 DAYS TASKS</h3>
      <div className="pt-30 pb-5 mt-10 mb-10 border-b">
        {tasks.map((task) => (
          <p key={task.id}>
            <TfiTimer /> <div style={{ fontWeight: "bold" }}>{task.name}</div>
            <div>
              <TfiCalendar /> {task.date}
            </div>
            <TfiClip />
            {task.status}
            <br />
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

export default Next7;
