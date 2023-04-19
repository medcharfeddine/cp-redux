import React, { useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

function ListTask() {
  const [filter, setFilter] = useState("all");
  const tasks = useSelector((state) => {
    if (filter === "done") {
      return state.tasks.filter((task) => task.isDone);
    } else if (filter === "notDone") {
      return state.tasks.filter((task) => !task.isDone);
    } else {
      return state.tasks;
    }
  });

  return (
    <div>
      <div className="butn">
        <button className="btns" onClick={() => setFilter("all")}>
          All
        </button>
        <button className="btns" onClick={() => setFilter("done")}>
          Done
        </button>
        <button className="btns" onClick={() => setFilter("notDone")}>
          Not Done
        </button>
      </div>
      <div className="tasks">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
export default ListTask;
