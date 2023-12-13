import { createContext } from 'react';

export interface Position {
  x: string;
  y: string;
}

interface ActionValues {
  position: Position;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  openId: string;
  close: () => void;
  open: React.Dispatch<React.SetStateAction<string>>;
}

const actionContext = createContext({} as ActionValues);

export default actionContext;
