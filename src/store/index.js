import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import usersReducer from "./userSlice";
import productsReducer from "./productsSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    users: usersReducer,
    products: productsReducer,
  },
});

export default store;
