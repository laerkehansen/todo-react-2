"use client";
import AddTask from "./AddTask";
import List from "./List";
import { useState } from "react";
const ToDoApp = () => {
  const [tasks, setTasks] = useState([]); //opretter arry
  //funkton tilføje task i form for task
  function addTask(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const task = formData.get("task");

    const newTask = {
      id: crypto.randomUUID(),
      text: task,
      completed: false,
    };
    setTasks(tasks.concat(newTask));
    // eller setTasks([...tasks, newTask]);
    console.log(addTask);
    event.target.reset();
  }
  return (
    <section className=" bg-slate-500">
      <AddTask addTask={addTask} />
      <List tasks={tasks} />
    </section>
  );
};

export default ToDoApp;
