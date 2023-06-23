import DefaultButton from "../../atoms/Buttons/DefaultButton";
import SearchInput from "../../atoms/Inputs/SearchInput";
export default function Header({
  setSearch,
  switchStripped,
  stripped,
  setSortByCountry,
  setRestoreData,
  search,
}) {
  return (
    <div className="justify-center flex mt-8">
      <DefaultButton
        options={{
          text: stripped ? "Filas sin colorear" : "Colorear filas",
        }}
        className="me-3"
        onClick={(e) => {
          switchStripped();
        }}
      />
      <DefaultButton
        options={{ text: "Ordenar por país" }}
        className="me-3"
        onClick={() => {
          setSortByCountry();
        }}
      />
      <DefaultButton
        options={{ text: "Restaurar estado inicial" }}
        onClick={() => {
          setRestoreData();
        }}
        className="me-3"
      />
      <SearchInput
        value={search}
        options={{ placeholder: "Filtrar por país" }}
        setSearch={setSearch}
      />
    </div>
  );
}
