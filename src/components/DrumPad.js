const DrumPad = ({ id, audio, callback }) => {
  return (
    <div
      className="drum-pad flex justify-center items-center rounded-xl bg-violet-800 p-7 px-10 text-3xl font-extrabold m-2 shadow-xl shadow-violet-950 border border-violet-800 hover:border-violet-500 hover:cursor-pointer select-none active:bg-violet-900"
      id={id}
      onMouseDown={(e) => callback(e, id)}
    >
      <audio id={"audio-" + id} src={audio} preload="auto"></audio>
      {id}
    </div>
  );
};

export default DrumPad;
