import Button from "./Button";
const AddTask = ({ onSubmit, addTask }) => {
  console.log(onSubmit);
  return (
    <div className="flex justify-between px-4 py-4">
      <form onSubmit={addTask}>
        <input type="text" name="task" placeholder="Add a new task" required />
        <button type="submit">add task</button>
      </form>
    </div>
  );
};

export default AddTask;
