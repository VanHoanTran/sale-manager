import { ButtonProps } from '../../../../constants/Props';

const ButtonWrapper = ({ children, onClick, active, disable }: ButtonProps) => {
  return (
    <button
      disabled={disable}
      onClick={onClick}
      className={`${disable ? 'cursor-not-allowed text-slate-300' : ''} ${
        active ? 'bg-slate-200' : ''
      } flex hover:bg-slate-200 items-center cursor-pointer justify-center h-8 w-8 rounded-full`}
    >
      {children}
    </button>
  );
};

export default ButtonWrapper;
