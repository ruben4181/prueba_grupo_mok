export default function RoundedButton({ options, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        "btn btn-primary px-4 bg-blue-300 hover:bg-blue-400 text-black py-2 rounded-full shadow-2xl " +
        className
      }
    >
      {options.text}
    </button>
  );
}
