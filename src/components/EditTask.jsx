import React, { useContext, useEffect, useState } from "react";
import All from "./Edit";
import { TodosContext } from "../App";
import {
  TfiCalendar,
  TfiPencil,
  TfiTrash,
  TfiClip,
  TfiTimer,
  TfiCheck,
  TfiAlert,
} from "react-icons/tfi";
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";
import "../App.css";
import SingleTask from "./SingleTask";

function EditTask({ task }) {
  const stored = JSON.parse(localStorage.getItem("name"));
  console.log("stored", stored);

  const [tasks, setTasks] = useContext(TodosContext);
  console.log("tasks passed from all", tasks);
  console.log("single task from all", task);
  const [check, setCheck] = useState(false);
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState(stored);

  const handleDelete = (id) => {
    setTasks(tasks?.filter((task) => task.id !== id));
  };
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(task.name));
    console.log("name", task.name);
  }, [name]);
  // const handleEditName = (e, id) => {
  //   task.name = e.target.value;
  //  setTasks(
  //    tasks?.map((task) => {
  //      if (task.id === id) {
  //        return { ...task, name: task.name };
  //      }
  //      return task;
  //    })
  //  );
  // };
  const handleChecked = (id) => {
    setTasks(
      tasks?.map((item) => {
        if (item.id === id) {
          return { ...item, checked: checked };
        }
        return item;
      })
    );
  };
  return (
    <>
      <br></br>
      <div className="pt-top">
        {/* {tasks.map((task) => (
          <SingleTask {...task} key={task.id} />
        ))} */}
        <h3>ID: {task.id}</h3>
        {/* <p className={`task-names ${check === true ? "check" : ""}`}> */}
        {/* {task?.checked === true ? (
          <p className="task-names">Task: {task.name}</p>
        ) : (
          <p style={{ textDecoration: "none" }}>Task: {task.name}</p>
        )} */}
        <p className={`task-names`}>{task.name}</p>
        <p>Due Date: {task.date}</p>
        <p>Status: {task.check}</p>
        <div className="text-center button-container">
          <button onClick={() => handleChecked(task.id)} className="buttons">
            Change Status
          </button>
          {!task?.checked ? <TfiAlert></TfiAlert> : <TfiCheck></TfiCheck>}
        </div>
        <div>
          <TfiCalendar />
          Date added: {task.tDate}
        </div>
        <br /> Due Date: {task.date}
        <TfiClip />
        Status: {task.checked}
        <br></br>
        {/* <div className="text-center button-container">
          <button onClick={() => handleEdit(task.id)} className="buttons">
            <TfiPencil />
            Edit Task
          </button>
        </div> */}
        <div className="text-center button-container">
          <button onClick={() => handleDelete(task.id)} className="buttons">
            <TfiTrash />
            Delete Task
          </button>
        </div>
      </div>
    </>
  );
}

export default EditTask;
