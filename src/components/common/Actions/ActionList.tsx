import { ReactNode, useContext } from 'react';
import useOutsideClick from '../../../hooks/useOutsideClick';
import actionContext from '../../../contexts/actionContext';
import { createPortal } from 'react-dom';

interface ActionListProps {
  id: string;
  children: ReactNode;
}
const ActionList = ({ id, children }: ActionListProps) => {
  const { close, openId, position } = useContext(actionContext);
  const { ref } = useOutsideClick(close, false);
  if (openId !== id) return null;
  return createPortal(
    <div
      ref={ref}
      className=" fixed rounded-md border border-slate-100 bg-white py-2 shadow-md"
      style={{ right: `${position.x}px`, top: `${position.y}px` }}
    >
      <ul>{children}</ul>
    </div>,
    document.body,
  );
};

export default ActionList;
