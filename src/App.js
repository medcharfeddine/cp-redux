import React from "react";
import AddTask from "./Components/Addtask";
import ListTask from "./Components/ListTask";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
