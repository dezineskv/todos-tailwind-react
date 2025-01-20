import React, { useContext, useEffect, useState } from "react";
import { TodosContext } from "../App";
import {
  TfiCalendar,
  TfiPencil,
  TfiTrash,
  TfiClip,
  TfiTimer,
} from "react-icons/tfi";
import { Link } from "react-router-dom";
import EditTask from "./EditTask";

function Status() {
  const [tasks, setTasks] = useContext(TodosContext);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    setStatus(tasks.filter((tds) => tds.checked === false));
  }, [tasks]);
  return (
    <div className="bg-slate-950 home-page">
      <h3>TASKS BY STATUS</h3>
      <div className="items-list">
        {status.map((task) => (
          <EditTask task={task}></EditTask>
        ))}
      </div>
    </div>
  );
}

export default Status;
