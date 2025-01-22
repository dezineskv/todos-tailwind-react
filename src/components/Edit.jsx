import React, { useContext, useState } from "react";
import { TodosContext } from "../App";
import EditTask from "./EditTask";

function Edit({ tasks, setTasks }) {
  return (
    <>
      <div className="bg-slate-950 home-page">
        <h3>ALL TASKS</h3>
        <p>Total tasks: {tasks.length}</p>
        {
          tasks?.map((task) => (
            <EditTask task={task} setTask={setTasks}></EditTask>
          ))
          // <p key={task.id}>
          //   <div>{task.name}</div>
          // </p>
        }
      </div>
    </>
  );
}
export default Edit;
