import DefaultCell from "../../atoms/TableCells/DefaultCell";
import ActionsCell from "../../molecules/CustomCells/ActionsCell";
import ThumbnailCell from "../../molecules/CustomCells/ThumbnailCell";

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
      <ThumbnailCell src={imgUrl} alt={"user-" + name + "-thumbnail"} />
      <DefaultCell value={name} />
      <DefaultCell value={lastname} />
      <DefaultCell value={country} />
      <ActionsCell actions={actions} id={id} />
    </tr>
  );
}
