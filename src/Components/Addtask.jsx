import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleAdd } from "../Redux/Action";

function AddTask() {
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (newTask.trim() !== "") {
      dispatch(handleAdd(newTask));
      setNewTask("");
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />
      <button className="btn" type="submit"></button>
    </form>
  );
}
export default AddTask;
