export default function RoundedButton({ options, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        "btn btn-primary px-4 bg-slate-50 hover:bg-slate-200 text-black py-2 rounded-full shadow-2xl " +
        className
      }
    >
      {options.text}
    </button>
  );
}
