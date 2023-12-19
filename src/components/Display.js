const Display = ({ text }) => {
  return (
    <div
      id="display"
      className="col-span-full rounded-xl bg-violet-400 h-20 min-w-full m-2 flex justify-center items-center text-5xl font-extrabold select-none"
    >
      {text}
    </div>
  );
};

export default Display;
