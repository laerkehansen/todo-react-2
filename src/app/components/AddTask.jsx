import Button from "./Button";
const AddTask = ({ onSubmit, addTask }) => {
  console.log(onSubmit);
  return (
    <div className="flex justify-between gap-5 py-4">
      <form className="flex justify-between gap-5 py-4" onSubmit={addTask}>
        <input
          className=" rounded-md pl-2"
          type="text"
          name="task"
          placeholder="Add a new task"
          required
        />
        <button
          className="bg-violet-400 hover:bg-violet-500 p-2 rounded-md"
          type="submit"
        >
          add task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
