import { useContext, useEffect, useState } from "react";
import { TodosContext } from "../App";
import { TfiCheckBox } from "react-icons/tfi";

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
                  <div className="font-bold">Task: </div>
                  {task.name}
                </p>
                <p>
                  <div className="font-bold">Due Date: </div>
                  {task.date}
                </p>
                <p>
                  <div className="font-bold">Status: </div>

                  {task.checked ? (
                    <div>
                      Completed
                      <div>
                        <TfiCheckBox></TfiCheckBox>
                      </div>
                    </div>
                  ) : (
                    " Pending"
                  )}
                </p>
              </>
            ))}
          </div>
        ) : (
          <div>No tasks due today</div>
        )}
      </div>
    </>
  );
}

export default Next7;
