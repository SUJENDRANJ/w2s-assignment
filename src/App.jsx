import { useDispatch } from "react-redux";
import "./App.css";
import { toggleTheme } from "./store/uiSlice";

function App() {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="dark text-3xl dark:bg-black dark:text-white">hello</div>

      <button
        onClick={() => {
          dispatch(toggleTheme());
        }}
      >
        Click
      </button>
    </div>
  );
}

export default App;
