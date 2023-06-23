import React, { lazy, Suspense, useState } from "react";
import Header from "./components/Header";
import DefaultSpinner from "./components/Fallbacks/DefaultSpinner";

const PersonsTable = lazy(() => import("./components/Tables/PersonsTable"));

function App() {
  const [search, setSearch] = useState("");
  const [stripped, setStripped] = useState(false);
  const [sortByCountry, setSortByCountry] = useState(false);
  const [restoreData, setRestoreData] = useState(0);

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
            setSortByCountry(!sortByCountry);
          }}
          search={search}
          setRestoreData={() => {
            setSearch("");
            setRestoreData(restoreData + 1);
          }}
        />
      </header>
      <main>
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
