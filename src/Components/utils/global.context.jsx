import { createContext , useMemo, useReducer} from "react";

export const initialState = {theme: "light", data: []}

export const ContextGlobal = createContext(undefined);

const reducer = (state, action) =>{
  switch (action.type){
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "ADD_DATA":
      return { ...state, data: [...state.data, action.payload] };
      default:
      return state;
  }
}

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };
  const addData = (newData) => {
    dispatch({ type: "ADD_DATA", payload: newData });
  };

  const contextValue = useMemo(() => {
    return { state, toggleTheme, addData };
  }, [state]);

  return (
    <ContextGlobal.Provider value={{}}>
      {children}
    </ContextGlobal.Provider>
  );
};
