import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Props } from '../constants/Props';
import { sortContext } from './sortContext';

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
    <sortContext.Provider value={{ sortField, sortType, setSortValue }}>
      {children}
    </sortContext.Provider>
  );
};

export default SortProvider;
