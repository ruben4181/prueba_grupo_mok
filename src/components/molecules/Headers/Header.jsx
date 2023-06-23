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
  const handleStrippedClicked = (e) => {
    switchStripped();
  };

  const handleSortByCountryClicked = (e) => {
    setSortByCountry();
  };

  const handleRestoreState = (e) => {
    setRestoreData();
  };

  return (
    <div className="justify-center flex mt-8">
      <DefaultButton
        options={{
          text: stripped ? "Filas sin colorear" : "Colorear filas",
        }}
        className="me-3"
        onClick={handleStrippedClicked}
      />
      <DefaultButton
        options={{ text: "Ordenar por país" }}
        className="me-3"
        onClick={handleSortByCountryClicked}
      />
      <DefaultButton
        options={{ text: "Restaurar estado inicial" }}
        onClick={handleRestoreState}
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
