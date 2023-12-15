import { useState } from 'react';
import { layoutContext } from './layoutContext';
import { Props } from '../constants/Props';

const LayoutProvider = ({ children }: Props) => {
  const [isOpenSideNav, setIsOpenSideNav] = useState<boolean>(false);
  return (
    <layoutContext.Provider value={{ isOpenSideNav, setIsOpenSideNav }}>
      {children}
    </layoutContext.Provider>
  );
};

export default LayoutProvider;
