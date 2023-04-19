import React from "react";
import { useDispatch } from "react-redux";

function Task({ task }) {
  const dispatch = useDispatch();

  function handleToggle() {
    dispatch({ type: "TOGGLE_TASK", payload: task.id });
  }

  function handleEdit(event) {
    event.preventDefault();
    const newDescription = prompt("Enter new description:", task.description);
    if (newDescription !== null && newDescription.trim() !== "") {
      dispatch({
        type: "EDIT_TASK",
        payload: { id: task.id, description: newDescription },
      });
    }
  }
  function handleDelete() {
    dispatch({ type: "DELETE_TASK", payload: task.id });
  }

  return (
    <div className="task">
      <input
        style={{ borderRadius: "50px" }}
        type="checkbox"
        id="checkbox"
        checked={task.isDone}
        onChange={handleToggle}
      />

      <span>{task.description}</span>
      <div className="btns2">
        <button className="btns" onClick={handleEdit}>
          Edit
        </button>
        <button className="btns" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Task;
