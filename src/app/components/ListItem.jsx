import Button from "./Button";
const ListItem = ({ task }) => {
  return (
    <li className="grid grid-cols-[1fr_auto_auto] gap-2 items-center p-2">
      <p>{task.text}</p>
      <Button BtnText="compleat" />
      <Button BtnText="delet" />
    </li>
  );
};

export default ListItem;
