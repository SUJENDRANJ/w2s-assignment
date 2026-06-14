import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchUsers } from "../store/userSlice";
import { fetchProducts } from "../store/productsSlice";

export const useDataFetcher = (activeTab, usersData, productsData) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (activeTab === "users" && usersData.length === 0) {
      dispatch(fetchUsers());
    }

    if (activeTab === "products" && productsData.length === 0) {
      dispatch(fetchProducts());
    }
  }, [activeTab, usersData.length, productsData.length, dispatch]);
};
