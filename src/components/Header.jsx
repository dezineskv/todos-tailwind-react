import React, { useContext } from "react";
import { TodosContext } from "../App";

function Header() {
  const [tasks, setTasks] = useContext(TodosContext);
  console.log(tasks);
  return (
    <div className="max-w-7xl header">
      <h1>To-Do Tasks Tracker</h1>
    </div>
  );
}

export default Header;
