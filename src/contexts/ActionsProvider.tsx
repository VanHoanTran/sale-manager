import { useState } from 'react';
import { Props } from '../constants/Props';
import actionContext, { Position } from './actionContext';

const ActionsProvider = ({ children }: Props) => {
  const [position, setPosition] = useState({} as Position);
  const [openId, setOpenId] = useState('');
  const open = setOpenId;
  const close = () => setOpenId('');

  return (
    <actionContext.Provider
      value={{
        position,
        setPosition,
        open,
        close,
        openId,
      }}
    >
      {children}
    </actionContext.Provider>
  );
};

export default ActionsProvider;
