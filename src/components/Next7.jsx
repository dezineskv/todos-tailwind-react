import React, { useContext, useEffect, useState } from "react";
import { TodosContext } from "../App";
import {
  TfiCalendar,
  TfiTimer,
  TfiPencil,
  TfiTrash,
  TfiClip,
  TfiCheck,
  TfiAlert,
} from "react-icons/tfi";
import { Link } from "react-router-dom";
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";
import EditTask from "./EditTask";
import moment from "moment";

function Next7() {
  const [tasks, setTasks] = useContext(TodosContext);
  const [seven, setSeven] = useState([]);

  var date = new Date();
  date.setDate(date.getDate() + 7);
  const sevenDates = moment(date).format("MM/DD/YYYY");

  useEffect(() => {
    setSeven(tasks.filter((sevs) => sevs.date <= sevenDates));
  }, [tasks]);

  return (
    <div className="bg-slate-950 home-page">
      <h3>NEXT 7 DAYS TASKS</h3>
      {
        seven.length >0 ? <div className="items-list">
        {seven.map((task) => (
          <EditTask task={task}></EditTask>
        ))}
      </div> : <div>No tasks due this week</div>

      }
     
    </div>
  );
}

export default Next7;
