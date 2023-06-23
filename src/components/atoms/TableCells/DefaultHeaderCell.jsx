export default function DefaultHeaderCell({ value, onClick }) {
  return (
    <th
      className="text-black dark:text-white text-center pt-5 pb-2 cursor-pointer"
      onClick={onClick}
    >
      {value}
    </th>
  );
}
