import { createContext } from 'react';

interface layoutContextValues {
  isOpenSideNav: boolean;
  setIsOpenSideNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export const layoutContext = createContext({} as layoutContextValues);
