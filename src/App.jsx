import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Tabs from "./components/Tabs";
import DataTable from "./components/DataTable";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

import { useDataFetcher } from "./hooks/useFetchData";
import Pagination from "./components/Pagination";
import { toggleTheme } from "./store/uiSlice";
import Filter from "./components/Filters";
import ColumnSelector from "./components/ColumnSelector";

function App() {
  const [activeTab, setActiveTab] = useState("users");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [hiddenColumns, setHiddenColumns] = useState([]);

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.ui.theme);

  const usersState = useSelector((state) => state.users);
  const productsState = useSelector((state) => state.products);

  useDataFetcher(activeTab, usersState.data, productsState.data);

  const currentState = activeTab === "users" ? usersState : productsState;

  const categories = [
    "all",
    ...new Set(productsState.data.map((product) => product.category)),
  ];

  let filteredData = currentState.data;
  filteredData = currentState.data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  );

  if (activeTab === "products" && selectedCategory !== "all") {
    filteredData = filteredData.filter(
      (product) => product.category === selectedCategory,
    );
  }

  useEffect(() => {
    if (currentState.data.length) {
      setHiddenColumns([]);
    }
  }, [activeTab, currentState.data]);

  const allColumns =
    currentState.data.length > 0 ? Object.keys(currentState.data[0]) : [];

  const toggleColumn = (column) => {
    setHiddenColumns((prev) =>
      prev.includes(column)
        ? prev.filter((c) => c !== column)
        : [...prev, column],
    );
  };
  const visibleColumns = allColumns.filter(
    (column) => !hiddenColumns.includes(column),
  );

  const ITEMS_PER_PAGE = 10;
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
    setSearchTerm("");
  };

  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div className="min-h-screen font-mono text-ink dark:text-paper">
      {/* Masthead */}
      <header className="border-b-[1.5px] border-ink/15 dark:border-paper/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-widish text-signal">
              Field Index / Vol. 01
            </p>
            <h1 className="font-serif text-2xl italic tracking-tight text-ink dark:text-paper sm:text-3xl">
              W2S Solutions
            </h1>
          </div>
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-widish text-slate">
            <span>{today}</span>
            <button
              onClick={() => dispatch(toggleTheme())}
              aria-pressed={theme === "dark"}
              className="flex items-center gap-2 border-[1.5px] border-ink/20 px-2.5 py-1.5 uppercase tracking-widish text-slate transition-colors hover:border-signal hover:text-signal dark:border-paper/20"
            >
              <span className={theme === "light" ? "text-signal" : ""}>
                Day
              </span>
              <span className="relative h-3 w-6 border-[1.5px] border-ink/30 dark:border-paper/30">
                <span
                  className={`absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 bg-signal transition-all ${
                    theme === "dark" ? "left-3" : "left-0.5"
                  }`}
                />
              </span>
              <span className={theme === "dark" ? "text-signal" : ""}>
                Night
              </span>
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 sm:flex-row sm:gap-8">
        <Tabs activeTab={activeTab} onTabChange={handleTabChange} />

        <div className="min-w-0 flex-1">
          {currentState.loading ? (
            <Loader />
          ) : currentState.error ? (
            <ErrorMessage message={currentState.error} />
          ) : (
            <div className="flex flex-col gap-3">
              {/* Search */}
              <div className="relative w-full sm:max-w-xs">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate">
                  ⌕
                </span>
                <input
                  type="text"
                  placeholder="search records…"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full border-[1.5px] border-ink/20 bg-transparent py-2 pl-8 pr-3 text-xs placeholder:text-slate/60 focus:border-signal focus:outline-none dark:border-paper/20"
                />
              </div>

              {activeTab === "products" && (
                <Filter
                  value={selectedCategory}
                  options={categories}
                  onChange={setSelectedCategory}
                />
              )}

              {currentState.data.length > 0 && (
                <ColumnSelector
                  columns={Object.keys(currentState.data[0])}
                  visibleColumns={visibleColumns}
                  toggleColumn={toggleColumn}
                />
              )}

              <DataTable data={paginatedData} visibleColumns={visibleColumns} />

              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </div>
          )}
        </div>
      </main>

      <footer className="mx-auto max-w-6xl px-4 pb-8">
        <p className="border-t-[1.5px] border-ink/10 pt-4 text-[10px] uppercase tracking-widish text-slate/70 dark:border-paper/10">
          Source — dummyjson.com · Refreshed on tab load
        </p>
      </footer>
    </div>
  );
}

export default App;
