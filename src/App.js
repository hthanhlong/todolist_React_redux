import React from "react";
import "./style/app.css";
import Todolist from "./components/Todolist";

function App() {
  return (
    <div className="app">
      <div className="container">
        <h1>ToDo-List</h1>
        <Todolist />
      </div>
    </div>
  );
}

export default App;
