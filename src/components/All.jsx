import React, { useContext, useState } from "react";
import { TodosContext } from "../App";
import {
  TfiCalendar,
  TfiPencil,
  TfiTrash,
  TfiClip,
  TfiTimer,
} from "react-icons/tfi";
// import SingleTask from "./SingleTask";

function All({ tasks, setTasks }) {
  // const [tasks, setTasks] = useContext(TodosContext);

  console.log(tasks);

  return (
    <>
      <div className="bg-slate-950 home-page">
        <h3>ALL TASKS:</h3>
        <p>{tasks.length}</p>
        {tasks?.map((task) => (
          <p key={task.id}>
            <div>{task.name}</div>
          </p>
        ))}
        {/* // <SingleTask task={task} ></SingleTask> */}
      </div>
      <TfiPencil />
      Edit <TfiTrash /> Delete
    </>
  );
}
export default All;
