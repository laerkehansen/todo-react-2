import ListItem from "./ListItem";
import AddTask from "./AddTask";
const List = ({ tasks }) => {
  return (
    <ul>
      {/* <AddTask /> */}
      {tasks.map((task) => (
        <ListItem key={task.id} task={task} />
      ))}
      {/* <ListItem taskText="vaske tøj" tasks={tasks} /> */}
    </ul>
  );
};

export default List;
