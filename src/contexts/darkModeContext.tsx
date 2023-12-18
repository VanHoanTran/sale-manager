import { createContext } from 'react';
export interface LocalStorageProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const darkModeContext = createContext({} as LocalStorageProps);
