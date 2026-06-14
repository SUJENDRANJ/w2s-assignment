import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      if (state.theme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
    },
  },
});

export const { toggleTheme } = uiSlice.actions;
export default uiSlice.reducer;
