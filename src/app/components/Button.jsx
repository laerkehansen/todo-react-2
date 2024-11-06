const Button = ({ BtnText, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-violet-400 hover:bg-violet-500 p-2 rounded-md"
    >
      {BtnText}
    </button>
  );
};

export default Button;
