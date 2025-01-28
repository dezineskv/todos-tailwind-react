import { TfiTrash, TfiPencil } from "react-icons/tfi";
import PropTypes from "prop-types";

function EditTask({ task, onEditClick, onDelete }) {
  return (
    <>
      <div className="grid grid-rows-* grid-flow-col rounded-md gap-4 bg-white my-2 mx-2">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="mb-2">
              <h3>ID: {task.id} | Date added: {task.tDate}</h3>
              <div className="task-cont">
                <div className="text-bold task-w">Task: </div>
                <div className="task-titles">{task.name}</div>
              </div>
              <div className="task-cont">
                <div className="text-bold task-w">Due Date: </div>
                <div className="task-titles">{task.date}</div>
              </div>
              <div className="task-cont">
                <div className="text-bold task-w">Status: </div>
                <div className="task-titles">
                  {task.checked ? "Completed" : "Pending"}
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <button onClick={onEditClick} className="btns">
                <TfiPencil />
                Update Task
              </button>
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <button onClick={() => onDelete(task.id)} className="btns">
                <TfiTrash />
                Delete Task
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

EditTask.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
  }).isRequired,
  onEditClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default EditTask;
