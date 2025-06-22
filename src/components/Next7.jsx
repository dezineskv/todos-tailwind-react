import { useContext, useEffect, useState } from "react";
import { TodosContext } from "../App";
import { TfiCheckBox } from "react-icons/tfi";
import "../index.css";
import moment from "moment";

function Next7() {
  const [tasks, setTasks] = useContext(TodosContext);
  const [seven, setSeven] = useState([]);

  // saving today's date & getting 7 days out from today & format date
  var date = new Date();
  date.setDate(date.getDate() + 7);
  const sevenDates = moment(date).format("YYYY-MM-DD");

  // filtering dates less than/equal to sevenDates var, which is today plus 7
  useEffect(() => {
    setSeven(tasks.filter((sevs) => sevs.date <= sevenDates));
  }, [tasks, sevenDates]);

  return (
    <>
      <div className="bg-slate-950 home-page">
        <h3>THIS WEEK'S TASKS</h3>
        {seven.length > 0 && !seven.checked ? (
          <div className="flex flex-col  gap-6 items-center justify-center mt-4 bg-gray-800 p-4 rounded tex-white">
            {seven.map((task) => (
              <>
                <p key={task.id}>
                  <div className="font-bold" style={{ color: "white" }}>
                    Task:
                  </div>
                  <div style={{ color: "white" }}>{task.name} </div>
                </p>
                <p>
                  <div className="font-bold" style={{ color: "white" }}>
                    Due Date:
                  </div>
                  <div style={{ color: "white" }}>{task.date} </div>
                </p>
                <p>
                  <div className="font-bold" style={{ color: "white" }}>
                    Status:
                  </div>

                  {task.checked ? (
                    <div
                      className="flex justify-center items-center text-white"
                      style={{ color: "white" }}
                    >
                      &nbsp;Completed
                      <div className="pl-2">
                        <TfiCheckBox></TfiCheckBox>
                      </div>
                    </div>
                  ) : (
                    <div
                      style={{
                        borderBottom: "1px solid white",
                        color: "white",
                      }}
                    >
                      &nbsp;Pending
                    </div>
                  )}
                </p>
              </>
            ))}
          </div>
        ) : (
          "No tasks due this week"
        )}
      </div>
    </>
  );
}

export default Next7;
