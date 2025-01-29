import { useContext, useEffect, useState } from "react";
import EditTask from "./EditTask";
import { TodosContext } from "../App";
import Modal from "./Modal";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function Edit() {
  const [tasks, setTasks] = useContext(TodosContext);

  // selectedTask will show in the open modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  // send the tasks object to local storage (key: 'tasks', value: tasks) referenced in App
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [setTasks, tasks]);

  const handleEditClick = (task) => {
    setSelectedTask(task); // Set the task to be edited
    setIsModalOpen(true); // Open the modal
  };

  const handleModalClose = () => {
    setSelectedTask(null); // Clear the selected task
    setIsModalOpen(false); // Close the modal
  };
  // the updatedTask will get saved onclick of the save button in the modal then close modal
  const handleSaveTask = (updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === updatedTask.id ? { ...task, ...updatedTask } : task
      )
    );
    handleModalClose(); // Close the modal after saving
  };
  // after filtering the matching id for deletion, the toast message appears
  const handleDelete = (id) => {
    setTasks(tasks?.filter((t) => t.id !== id));
    toast.success("Task Successfully Deleted!");
  };

  return (
    <>
      <div className="home-page">
        <h3>ALL TASKS</h3>
        <p>Total tasks added: {tasks?.length}</p>
        {tasks?.length <= 0 ? (
          <div>
            <Link to="/add">
              <u>Add some</u>
            </Link>
          </div>
        ) : (
          <div
            className="mt-4 p-4 rounded"
            style={{ display: "flex", maxWidth: "1100px", flexWrap: "wrap" }}
          >
            <div style={{ width: "100%", textAlign: "center" }}>
              <Link to="/add">
                <u>Add more tasks</u>
              </Link>
            </div>
            {tasks?.map((task, id) => (
              <EditTask
                key={id}
                task={task}
                onEditClick={() => handleEditClick(task)}
                onDelete={(id) => handleDelete(id)}
              />
            ))}
          </div>
        )}
      </div>
      {isModalOpen && (
        <Modal
          task={selectedTask}
          onClose={handleModalClose}
          onSave={handleSaveTask}
        />
      )}
    </>
  );
}
export default Edit;
