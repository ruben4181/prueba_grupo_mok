import TableRow from "../TableRows/TableRow";

export default function TableBody({ data, strippedRow, actions, targetRef }) {
  return (
    <tbody>
      {data.map((row, index) => (
        <TableRow
          imgUrl={row.imgUrl}
          name={row.name}
          lastname={row.lastname}
          country={row.country}
          className={
            row.className +
            (strippedRow
              ? index % 2 === 0
                ? " bg-white dark:bg-[#112233]"
                : " bg-slate-100 dark:bg-[#556677]"
              : "")
          }
          key={index + "tr"}
          actions={actions}
          id={row.id}
          targetRef={index === data.length - 1 ? targetRef : null}
        />
      ))}
    </tbody>
  );
}
