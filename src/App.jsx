import React, { lazy, Suspense, useState } from "react";
import Header from "./components/molecules/Headers/Header";
import DefaultSpinner from "./fallbacks/DefaultSpinner";

const PersonsTable = lazy(() =>
  import("./components/templates/Tables/PersonsTable")
);

function App() {
  const [search, setSearch] = useState("");
  const [stripped, setStripped] = useState(false);
  const [sortByCountry, setSortByCountry] = useState(1);
  const [restoreData, setRestoreData] = useState(1);

  return (
    <div className="min-h-screen mx-auto bg-gray-50 dark:bg-neutral-900">
      <div className="pt-8">
        <h1 className="text-5xl font-bold text-center dark:text-white">
          Lista de usuarios
        </h1>
      </div>
      <header>
        <Header
          setSearch={setSearch}
          switchStripped={() => {
            setStripped(!stripped);
          }}
          stripped={stripped}
          setSortByCountry={() => {
            setSortByCountry(sortByCountry + 1);
          }}
          search={search}
          setRestoreData={() => {
            setSearch("");
            setRestoreData(restoreData + 1);
          }}
        />
      </header>
      <main className="me-2 ms-2">
        <Suspense fallback={<DefaultSpinner />}>
          <PersonsTable
            search={search}
            stripped={stripped}
            sortByCountry={sortByCountry}
            restoreData={restoreData}
          />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
