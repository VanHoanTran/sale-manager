import { useEffect } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';
import { darkModeContext } from './darkModeContext';
import { Props } from '../constants/Props';
const DarkModeProvider = ({ children }: Props) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState<boolean>(
    window.matchMedia('(prefers-color-scheme:dark)').matches,
    'isDarkMode',
  );
  const toggleDarkMode = () => {
    setIsDarkMode(isDark => !isDark);
  };
  useEffect(() => {
    document.documentElement.classList.add(isDarkMode ? 'dark' : 'light');
    document.documentElement.classList.remove(isDarkMode ? 'light' : 'dark');
  }, [isDarkMode]);

  return (
    <darkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </darkModeContext.Provider>
  );
};

export default DarkModeProvider;
