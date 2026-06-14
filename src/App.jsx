import { useState } from "react";
import { useSelector } from "react-redux";

import Tabs from "./components/Tabs";
import DataTable from "./components/DataTable";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

import { useDataFetcher } from "./hooks/useFetchData";

function App() {
  const [activeTab, setActiveTab] = useState("users");

  const usersState = useSelector((state) => state.users);

  const productsState = useSelector((state) => state.products);

  useDataFetcher(activeTab, usersState.data, productsState.data);

  const currentState = activeTab === "users" ? usersState : productsState;

  return (
    <div className="p-5">
      <h1 className="mb-5 text-2xl font-bold">Dashboard</h1>

      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

      {currentState.loading ? (
        <Loader />
      ) : currentState.error ? (
        <ErrorMessage message={currentState.error} />
      ) : (
        <DataTable data={currentState.data} />
      )}
    </div>
  );
}

export default App;
