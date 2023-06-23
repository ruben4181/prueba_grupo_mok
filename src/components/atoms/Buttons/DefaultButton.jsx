export default function DefaultButton({ options, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        "btn btn-primary px-4 bg-slate-200 hover:bg-slate-400 text-black dark:bg-slate-700 dark:text-white font-bold py-2 rounded " +
        className
      }
    >
      {options.text}
    </button>
  );
}
