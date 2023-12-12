import { MouseEvent, ReactNode } from 'react';
import SvgWrapper from '../SvgWrapper';

type IconButtonProps = {
  icon: ReactNode;
  onClick: (e: MouseEvent) => void | (() => void);
  padding?: boolean;
};
const IconButton = ({ onClick, icon, padding = true }: IconButtonProps) => {
  return (
    <button
      type="button"
      className={`duration-400 mx-1 rounded-full  p-2 transition-all ease-in  ${
        padding
          ? 'p-2 hover:bg-slate-200'
          : 'text-slate-50 hover:text-slate-300'
      } `}
      onClick={onClick}
    >
      <span>
        <SvgWrapper>{icon}</SvgWrapper>
      </span>
    </button>
  );
};

export default IconButton;
