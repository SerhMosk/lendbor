import { createContext, useContext } from "react";
import usePersistedState from "./usePersistedState";

// register the context
const ThemeContext = createContext({});

/**
 * export custom provider
 * @param {boolean} darkMode
 * @returns
 */
// @ts-ignore
export const ThemeProvider = ({ children }) => {
  /** usePersistedState for storing state in local store */
  // const [darkMode, setDarkMode] = useState(false);
  const [darkMode, setDarkMode] = usePersistedState("darkmode", true);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

// export a custom hook to use this specific context
export const useThemeContext = () => useContext(ThemeContext);
