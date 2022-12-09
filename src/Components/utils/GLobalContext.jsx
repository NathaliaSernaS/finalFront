import { useEffect } from "react";
import { createContext, useReducer, useMemo, useCallback } from "react";

export const initialState = {theme: "light", dentists: []}

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {

  const actions = useMemo(() => ({
    FETCH_DATA: "FETCH_DATA",
    THEME_LIGHT: "THEME_LIGHT",
    THEME_DARK: "THEME_DARK"
  }), [])

  const reducer = (state, action) => {
    switch (action.type) {
      case actions.FETCH_DATA:
        return { ...state, dentists: action.payload }
      case actions.THEME_LIGHT:
        return { ...state, theme: "light" }
      case actions.THEME_DARK:
        return { ...state, theme: "dark" }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const providerState = useMemo(() => ({
    dentists: state.dentists,
    theme: state.theme,
    setDentists: (data) => dispatch({ type: actions.FETCH_DATA, payload: data}),
    setLightTheme: () => dispatch({ type: actions.THEME_LIGHT }),
    setDarkTheme: () => dispatch({ type: actions.THEME_DARK })
  }),[actions, state, dispatch])

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      providerState.setDentists(data);
    } catch (error) {
        console.error(error)
    }
  }, [providerState])

  useEffect(() => {
    fetchData()
  }, [providerState, fetchData])

  
  return (
    <GlobalContext.Provider value={providerState}>
      {children}
    </GlobalContext.Provider>
  );
};