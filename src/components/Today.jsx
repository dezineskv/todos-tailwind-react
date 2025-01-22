import React, { useContext, useEffect, useState } from "react";
import { TodosContext } from "../App";
import moment from "moment";
import EditTask from "./EditTask";

function Today() {
  const [tasks, setTasks] = useContext(TodosContext);
  const [todayTodo, setTodayTodo] = useState([]);

  const date = new Date();
  const todayDate = moment(date).format("MM/DD/YYYY");

  useEffect(() => {
    setTodayTodo(tasks.filter((tds) => tds.date === todayDate));
  }, [tasks]);

  return (
    <div className="bg-slate-950 home-page">
      <h3>TODAY'S TASKS</h3>
      {todayTodo.length > 0 ? (
        <div className="items-list">
          {todayTodo.map((task) => (
            <EditTask task={task}></EditTask>
          ))}
        </div>
      )
      :
        <div>No tasks due today</div>
      }
    
    </div>
  );
}

export default Today;
