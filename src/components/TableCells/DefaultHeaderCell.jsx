export default function DefaultCell({ value, onClick }) {
  return (
    <th
      className="text-black dark:text-white text-center pt-5 pb-2"
      onClick={onClick}
    >
      {value}
    </th>
  );
}
