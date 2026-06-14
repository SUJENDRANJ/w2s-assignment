import { useState } from "react";
import { useSelector } from "react-redux";

import Tabs from "./components/Tabs";
import DataTable from "./components/DataTable";
import { useDataFetcher } from "./hooks/useFetchData";

function App() {
  const [activeTab, setActiveTab] = useState("users");

  const users = useSelector((state) => state.users.data);

  const products = useSelector((state) => state.products.data);

  useDataFetcher(activeTab, users, products);

  const currentData = activeTab === "users" ? users : products;

  return (
    <div className="mx-auto max-w-7xl p-6">
      <h1 className="mb-6 text-2xl font-bold">Data Dashboard</h1>

      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

      <DataTable data={currentData} />
    </div>
  );
}

export default App;
