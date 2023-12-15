import { useContext } from 'react';
import { layoutContext } from '../contexts/layoutContext';

export const useLayoutContext = () => {
  const context = useContext(layoutContext);
  if (context === undefined)
    throw new Error('useLayoutContext was used outside LayoutContext Provider');
  return context;
};
