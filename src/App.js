import React from "react";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div>
      <h1> My Todo List </h1>
      <TodoItem todo="Finish plus project."/>
      <TodoItem todo="drink water."/>
      <TodoItem todo="Walk the dog."/>
  </div>
  );
}


export default App;
