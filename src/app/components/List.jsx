import ListItem from "./ListItem";
const List = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <div>
      <ul className="even:bg-violet-100">
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion} // Passer toggle-funktion
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
