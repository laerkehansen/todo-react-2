import AddTask from "./AddTask";
import List from "./List";
const ToDoApp = () => {
  return (
    <section className=" bg-slate-500">
      <AddTask />
      <List />
    </section>
  );
};

export default ToDoApp;
