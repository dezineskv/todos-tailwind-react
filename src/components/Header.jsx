import React, { useContext } from "react";
import { TodosContext } from "../App";
import { TfiAgenda } from "react-icons/tfi";

function Header() {
  const [tasks, setTasks] = useContext(TodosContext);
  console.log(tasks);
  return (
    <div className="max-w-7xl header">
      <TfiAgenda style={{ marginTop: "4px" }} />
      <h2 style={{fontSize: '32px'}}>To-Do Tasks Tracker</h2>
    </div>
  );
}

export default Header;
