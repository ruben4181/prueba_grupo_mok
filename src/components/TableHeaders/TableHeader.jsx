import DefaultHeaderCell from "../TableCells/DefaultHeaderCell";

export default function TableHeader({ columns, orderByColumn }) {
  return (
    <thead>
      <tr>
        {columns.map((col, index) => (
          <DefaultHeaderCell
            value={col.label}
            key={index + "-dfh"}
            onClick={() => {
              orderByColumn(col.value, true);
            }}
          />
        ))}
      </tr>
    </thead>
  );
}
