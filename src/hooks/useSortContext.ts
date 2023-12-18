import { useContext } from 'react';
import { sortContext } from '../contexts/sortContext';

export const useSortContext = () => {
  const context = useContext(sortContext);
  if (context === undefined)
    throw new Error('SortContext was used outside SortContext Provider');
  return context;
};
