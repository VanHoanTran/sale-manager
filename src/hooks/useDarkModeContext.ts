import { useContext } from 'react';
import { darkModeContext } from '../contexts/darkModeContext';
export const useDarkModeContext = () => {
  const context = useContext(darkModeContext);
  if (context === undefined)
    throw new Error('DarkModeContext was used outside DarkMode Provider');
  return context;
};
