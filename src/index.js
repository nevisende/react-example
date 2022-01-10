import React from "react"
import ReactDOM from "react-dom"
//component file
import TodoContainer from "./components/TodoContainer.js"
ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>, 
  document.getElementById("root")
  );