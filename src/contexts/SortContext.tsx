import { createContext, useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Props, SortContextProps } from '../constants/Props';

const defaultValue: SortContextProps = {
  sortField: '',
  sortType: '',
};

const SortContext = createContext(defaultValue);

const SortProvider = ({ children }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy') || '';
  const [sortField, setSortField] = useState('');
  const [sortType, setSortType] = useState('');

  useEffect(() => {
    setSortField(sortBy.split('-').at(0) || '');
    setSortType(sortBy.split('-').at(1) || '');
  }, [sortBy]);

  const setSortValue = (value: string) => {
    searchParams.set('sortBy', value);
    setSearchParams(searchParams);
  };

  return (
    <SortContext.Provider value={{ sortField, sortType, setSortValue }}>
      {children}
    </SortContext.Provider>
  );
};

const useSortContext = () => {
  const context = useContext(SortContext);
  if (context === undefined)
    throw new Error('SortContext was used outside SortContext Provider');
  return context;
};

export { SortProvider, useSortContext };
