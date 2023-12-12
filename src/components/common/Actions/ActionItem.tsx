import { ReactNode, useContext } from 'react';
import SvgWrapper from '../SvgWrapper';
import actionContext from '../../../contexts/actionContext';

interface ActionItemProps {
  icon: ReactNode;
  children: ReactNode;
  onClick: () => void;
}

const ActionItem = ({ icon, children, onClick }: ActionItemProps) => {
  const { close } = useContext(actionContext);

  const handleClick = () => {
    onClick();
    close();
  };
  return (
    <li>
      <button
        onClick={handleClick}
        className="flex w-full items-center gap-4 px-4 py-2 text-left text-sm text-slate-700 transition-all duration-75 hover:bg-slate-100"
      >
        <SvgWrapper size="sm">{icon}</SvgWrapper>
        <span>{children}</span>
      </button>
    </li>
  );
};
export default ActionItem;
