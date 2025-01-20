import React, { useContext, useState } from "react";
// import  {task}  from "./All";
import All from "./Edit";
import { TodosContext } from "../App";
import {
  TfiCalendar,
  TfiPencil,
  TfiTrash,
  TfiClip,
  TfiTimer,
} from "react-icons/tfi";

function EditTask({ task }) {
  const [tasks, setTasks] = useContext(TodosContext);
  // const useTodos = useContext(TodosContext);
  // const [tasks, setTasks] = useState();

  console.log("tasks passed from all", tasks);
  console.log("single task from all", task);
  const handleDelete = (id) => {
    setTasks(tasks?.filter((task) => task.id !== id));
  };

  return (
    <>
      <br></br>
      <div className="pt-top">
        <h3>{task.id}</h3>
        <p>Task: {task.name}</p>
        <p>Due Date: {task.date}</p>
        <p>Status: {task.status}</p>

        <button onClick={() => handleDelete(task.id)} className="buttons">
          <TfiTrash />
          Delete Task
        </button>
        {/* {tasks?.map((task) => {
          <p key={task.id}>
            <div>{task.name}</div>
          </p>;
        })} */}
        {/* <div>{task.id}</div> */}
      </div>
    </>
  );
}

export default EditTask;
