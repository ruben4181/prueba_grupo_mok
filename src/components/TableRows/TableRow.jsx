import DefaultCelell from "../TableCells/DefaultCell";
import ActionsCell from "../TableCells/ActionsCell";

export default function TableRow({
  id,
  imgUrl,
  name,
  lastname,
  country,
  className,
  actions,
  targetRef,
}) {
  return (
    <tr className={className} ref={targetRef}>
      <DefaultCelell value={imgUrl} />
      <DefaultCelell value={name} />
      <DefaultCelell value={lastname} />
      <DefaultCelell value={country} />
      <ActionsCell actions={actions} id={id} />
    </tr>
  );
}
