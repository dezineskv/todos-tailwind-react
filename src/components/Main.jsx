import React, { useContext, useState } from "react";
import { TodosContext } from "../App";

export const Main = () => {
  const [tasks, setTasks] = useContext(TodosContext);
  const [input, setInput] = useState("");
  console.log(tasks);

  const handleSubmit = () => {
    setTasks((prev) => [
      ...prev,
      {
        id: tasks.length + 1,
        name: input,
      },
    ]);
    setInput("");
  };
  return (
    <div className="bg-slate-950 home-page">
        <h3>Tasks</h3>
      <div>
        {tasks.map((task) => (
          <p key={task.id}>{task.name}</p>
        ))}
      </div>
      <input
        className="border"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      ></input>
      <div className="buttonCont">
        <button
          className="bg-transparent hover:bg-slate-500 text-slate-500 font-semibold hover:text-white py-2 px-4 border border-blue-550 hover:border-transparent rounded"
          onClick={handleSubmit}
        >
          Save to Agenda
        </button>
      </div>
    </div>
  );
};
