import { useContext, useEffect, useState } from "react";
import { TodosContext } from "../App";

function Status() {
  const [tasks, setTasks] = useContext(TodosContext);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    setStatus(tasks.filter((tds) => tds.checked === false));
  }, [tasks]);

  return (
    <>
      <div className="bg-slate-950 home-page">
        <h3>PENDING TASKS</h3>
        {status.length > 0 || status === false ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center justify-center mt-4 bg-gray-800 p-4 rounded">
            {status.map((task) => (
              <>
                <p key={task.id} style={{ color: "white" }}>
                  Task: {task.name}
                </p>
                <p style={{ color: "white" }}>Due Date: {task.date}</p>
                <p style={{ color: "white" }}>
                  Status:
                  {task.checked ? "Completed <TfiCheckBox></TfiCheckBox>" : "Pending"}
                </p>
              </>
            ))}
          </div>
        ) : (
          <div>No tasks due</div>
        )}
      </div>
    </>
  );
}

export default Status;
