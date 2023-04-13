export default function (props) {
  const { error } = props;
  return (
    <div className="bg-slate-900 text-white w-[100vw] h-[100vh] flex items-center justify-center gap-2">
    <i className="fa-solid fa-triangle-exclamation text-red-500 text-2xl"></i>
      <span className="font-bold text-xl">{error}</span>
    </div>
  );
}
