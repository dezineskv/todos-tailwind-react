import React, { useContext, useEffect, useState } from "react";
import { TodosContext } from "../App";
import EditTask from "./EditTask";

function SingleTask() {
  const [tasks, setTasks] = useContext(TodosContext);

  return (
    <div className="bg-slate-950 home-page">
      <h3>TASK</h3>

      <div className="items-list">
        {tasks.map((task) => (
          <EditTask task={task}></EditTask>
        ))}
      </div>
    </div>
  );
}

export default SingleTask;
