import { createContext } from 'react';
import { SortContextProps } from '../constants/Props';
const defaultValue: SortContextProps = {
  sortField: '',
  sortType: '',
};

export const sortContext = createContext(defaultValue);
