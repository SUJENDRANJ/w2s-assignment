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

  return (
    <div className="p-5 dark:bg-gray-900 dark:text-white">
      <h1 className="mb-5 text-2xl font-bold">Dashboard</h1>

      <button
        onClick={() => {
          dispatch(toggleTheme());
        }}
        className="mb-4 rounded border px-4 py-2 dark:border-gray-600 dark:text-white"
      >
        Toggle Theme
      </button>

      <Tabs activeTab={activeTab} onTabChange={handleTabChange} />

      {currentState.loading ? (
        <Loader />
      ) : currentState.error ? (
        <ErrorMessage message={currentState.error} />
      ) : (
        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="mb-4 w-full rounded border p-2"
          />

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
  );
}

export default App;
