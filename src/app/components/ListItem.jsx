import Button from "./Button";
const ListItem = ({
  task,

  toggleTaskCompletion,
  deleteTask,
}) => {
  return (
    <li className="grid grid-cols-[1fr_auto_auto] gap-2 items-center p-2 bg-violet-50 border-2 border-violet-200">
      <p
        className={
          task.completed ? "text-green-500 line-through" : "text-black"
        }
      >
        {task.text}
      </p>
      <Button onClick={() => deleteTask(task.id)} BtnText="Delete" />
      <Button
        onClick={() => toggleTaskCompletion(task.id)} // Kalder toggle-funktion med opgavens id
        BtnText={task.completed ? "Undo" : "Check"} // Ændrer tekst afhængigt af completed-status
      />
    </li>
  );
};

export default ListItem;
