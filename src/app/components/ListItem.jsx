import Button from "./Button";
const ListItem = ({ taskText }) => {
  return (
    <li className="grid grid-cols-[1fr_auto_auto] gap-2 items-center p-2">
      <p>{taskText}</p>
      <Button BtnText="compleat" />
      <Button BtnText="delet" />
    </li>
  );
};

export default ListItem;
