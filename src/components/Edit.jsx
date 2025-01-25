import { useContext, useEffect, useState } from "react";
import EditTask from "./EditTask";
import { TodosContext } from "../App";
import Modal from "./Modal";
import toast from "react-hot-toast";

function Edit() {
  const [tasks, setTasks] = useContext(TodosContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [setTasks, tasks]);

  const handleEditClick = (task) => {
    setSelectedTask(task); // Set the task to be edited
    setIsModalOpen(true); // Open the modal
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedTask(null); // Clear the selected task
  };

  const handleSaveTask = (updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === updatedTask.id ? { ...task, ...updatedTask } : task
      )
    );
    handleModalClose(); // Close the modal after saving
  };
  const handleDelete = (id) => {
    setTasks(tasks?.filter((t) => t.id !== id));
    toast.success("Task Successfully Deleted!");
  };

  return (
    <>
      <div className="home-page">
        <h3>ALL TASKS</h3>
        <p>Total tasks added: {tasks?.length}</p>
        <div className="mt-4 p-4 rounded" style={{ display: "flex",maxWidth: '1100px',
    flexWrap: 'wrap'}}>
          {tasks?.map((task, id) => (
            <EditTask
              key={id}
              task={task}
              onEditClick={() => handleEditClick(task)}
              onDelete={(id) => handleDelete(id)}
            />
          ))}
        </div>
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
