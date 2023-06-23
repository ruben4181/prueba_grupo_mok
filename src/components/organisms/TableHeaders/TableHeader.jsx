import DefaultHeaderCell from "../../atoms/TableCells/DefaultHeaderCell";

export default function TableHeader({ columns, orderByColumn }) {
  return (
    <thead>
      <tr>
        {columns.map((col, index) => (
          <DefaultHeaderCell
            value={col.label}
            key={index + "-dfh"}
            onClick={() => {
              if (!["imgSrc", "id"].includes(col.value)) {
                orderByColumn(col.value, true);
              }
            }}
          />
        ))}
      </tr>
    </thead>
  );
}
