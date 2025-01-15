import React, { useContext, useState } from "react";
import { TodosContext } from "../App";
import { TfiTimer } from "react-icons/tfi";
import {
  TfiAgenda,
  TfiAlarmClock,
  TfiCalendar,
  TfiListOl,
  TfiLayoutListThumbAlt,
  TfiPlus,
  TfiSearch,
} from "react-icons/tfi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Dates() {
  const [tasks, setTasks] = useContext(TodosContext);
  const [input, setInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const currentDate = new Date();
  const formatDate = currentDate.toLocaleDateString("en-US", {
    timeZoneName: "short",
  });

  //   const handleSubmit = () => {
  //     setTasks((prev) => [
  //       ...prev,
  //       {
  //         id: tasks.length + 1,
  //         name: input,
  //         date: `${formatDate}`,
  //         status: "Not completed",
  //         isCompleted: false,
  //       },
  //     ]);
  //     setInput("");
  //   };
  return (
    <div className="bg-slate-950 home-page">
      <h3>CHOOSE DATE</h3>

      {/* <input
        className="border"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      ></input> */}
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        dateFormat="Pp"
      />
    </div>
  );
}

export default Dates;
