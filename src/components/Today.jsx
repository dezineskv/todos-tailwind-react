import { useContext, useEffect, useState } from "react";
import { TodosContext } from "../App";
import { TfiCheckBox } from "react-icons/tfi";
import moment from "moment";

function Today() {
  const [tasks, setTasks] = useContext(TodosContext);
  const [todayTodo, setTodayTodo] = useState([]);

  // get today's date, format it & save to a variable
  const date = new Date();
  const todayDate = moment(date).format("YYYY-MM-DD");

  // filter out task dates that match today's date
  useEffect(() => {
    setTodayTodo(tasks.filter((tds) => tds.date === todayDate));
  }, [tasks, todayDate]);

  return (
    <>
      <div className="bg-slate-950 home-page">
        <h3>TODAY'S TASKS</h3>
        {todayTodo.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center justify-center mt-4 bg-gray-800 p-4 rounded">
            {todayTodo.map((task) => (
              <>
                <p key={task.id} style={{ color: "white" }}>
                  Task: {task.name}
                </p>
                <p style={{ color: "white" }}>Due Date: {task.date}</p>
                <p className="flex justify-center text-white">
                  Status:
                  {task.checked ? (
                    <div>
                      &nbsp;Completed
                      <div>
                        <TfiCheckBox></TfiCheckBox>
                      </div>
                    </div>
                  ) : (
                    <div style={{ borderBottom: "1px solid white" }}>
                      &nbsp;Pending
                    </div>
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

export default Today;
