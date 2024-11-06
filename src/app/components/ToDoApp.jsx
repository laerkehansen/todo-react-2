"use client";
import AddTask from "./AddTask";
import List from "./List";
import { useState } from "react";
const ToDoApp = () => {
  // add task funktionlitet
  const [tasks, setTasks] = useState([]); //opretter arry
  const [isCompleted, setIsCompleted] = useState(false);
  //funkton tilføje task i form for task
  function addTask(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const task = formData.get("task");
    //giver id til ny task
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

  const deleteTask = (id) => {
    // den tag det id du klikker på og siger at alle andre skal med men ik den det er !der sig at den ik må komme med
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Opdel tasks i completed og incompleted
  const completedTasks = tasks.filter((task) => task.completed);
  const incompleteTasks = tasks.filter((task) => !task.completed);
  return (
    <section className=" bg-violet-300 p-10">
      <h1 className="font-bold text-2xl text-white">TODO LIST</h1>
      <AddTask addTask={addTask} />
      <h2 className="font-bold bg-violet-400 p-2 text-white border-violet-500 border-2">
        To do
      </h2>
      <List
        tasks={incompleteTasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />
      <h2 className="font-bold bg-violet-400 p-2 text-white border-violet-500 border-2">
        Done
      </h2>
      <List
        tasks={completedTasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />
    </section>
  );
};

export default ToDoApp;
