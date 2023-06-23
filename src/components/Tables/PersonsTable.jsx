import TableHeader from "../TableHeaders/TableHeader";
import useTableData from "../../hooks/useTableData";
import TableBody from "../TableBodies/TableBody";
import RoundedButton from "../Buttons/RoundedButton";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useEffect } from "react";

const columns = [
  { label: "Foto", value: "imgSrc" },
  { label: "Nombre", value: "name" },
  { label: "Apellido", value: "lastname" },
  { label: "País", value: "country" },
  { label: "Acciones", value: "id" },
];

const PersonsTable = ({ search, stripped, sortByCountry, restoreData }) => {
  const {
    tableData,
    filterByColumn,
    orderByColumn,
    restoreTableData,
    removeItem,
  } = useTableData(100);

  const { targetRef, isIntersecting } = useIntersectionObserver({});

  const scrollToRef = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    restoreTableData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restoreData]);

  useEffect(() => {
    filterByColumn("country", search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    orderByColumn("country", sortByCountry);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortByCountry]);

  return (
    <>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed">
        <TableHeader columns={columns} orderByColumn={orderByColumn} />
        <TableBody
          targetRef={targetRef}
          data={tableData}
          strippedRow={stripped}
          actions={[
            {
              label: "Eliminar",
              handle: removeItem,
            },
          ]}
        />
      </table>
      {!isIntersecting ? (
        <div className="fixed bottom-0 left-0 right-0 w-full flex justify-center">
          <RoundedButton
            options={{ text: "Ir al final" }}
            className="mb-8"
            onClick={() => {
              scrollToRef();
            }}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default PersonsTable;
