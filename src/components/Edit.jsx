import React, { useContext, useState } from "react";
import { TodosContext } from "../App";
import {
  TfiCalendar,
  TfiPencil,
  TfiTrash,
  TfiClip,
  TfiTimer,
} from "react-icons/tfi";
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";
import EditTask from "./EditTask";

function Edit({ tasks, setTasks }) {
  // const [tasks, setTasks] = useContext(TodosContext);
  // const [tasks, setTasks] = useState("");

  console.log(tasks);

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
