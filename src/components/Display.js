const Display = ({ text }) => {
  return (
    <div
      id="display"
      className="rounded-xl bg-violet-400 min-w-full m-2 flex justify-center items-center text-7xl font-extrabold select-none"
    >
      {text}
    </div>
  );
};

export default Display;