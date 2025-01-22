import React, { useContext, useEffect, useState } from "react";
import { TodosContext } from "../App";
import { TfiPencil, TfiTrash, TfiTimer } from "react-icons/tfi";
import "../App.css";

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
  // const handleEdit = (id) => {
  // }

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(task.name));
    console.log("name", task.name);
  }, [name]);

  return (
    <>
      <br></br>
      <div className="grid grid-rows-* grid-flow-col gap-4">
        <div className="pt-top">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="mb-2">
                <h3>ID: {task.id}</h3>
                <div className="task-cont">
                  <div className="text-bold task-w">Task: </div>
                  <div className="task-titles">{task.name}</div>
                </div>
                <div className="task-cont">
                  <div className="text-bold task-w">Due Date: </div>
                  <div className="task-titles">{task.date}</div>
                </div>
                <div className="task-cont">
                  <div className="text-bold task-w">Status: </div>
                  <div className="task-titles">{task.checked}</div>
                </div>
                <div className="task-cont">
                  <div className="text-bold task-w">Date Added: </div>
                  <div className="task-titles">{task.tDate}</div>
                </div>
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <button onClick={() => handleChecked(task.id)} className="btns">
                  <TfiTimer />
                  Change Status
                </button>
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <button onClick={() => handleEdit(task.id)} className="btns">
                  <TfiPencil />
                  Delete Task
                </button>
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <button onClick={() => handleDelete(task.id)} className="btns">
                  <TfiTrash />
                  Delete Task
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditTask;
