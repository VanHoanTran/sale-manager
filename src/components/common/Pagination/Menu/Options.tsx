import { CheckIcon } from '@heroicons/react/24/outline';
import useOutsideClick from '../../../../hooks/useOutsideClick';

interface OptionsProps {
  rowsPerPage: number;
  show: boolean;
  close: () => void;
  selectHandler: (option: number) => void;
}

const selections = [5, 10, 20, 50, 100];
const Options = ({ rowsPerPage, show, close, selectHandler }: OptionsProps) => {
  const { ref } = useOutsideClick(close);
  return (
    <div
      ref={ref}
      className={`w-full absolute bottom-9 border border-slate-300 bg-slate-100 rounded-md right-0 ${
        show ? 'block' : 'hidden'
      }`}
    >
      {selections.map(option => (
        <div
          className={` w-full flex items-center gap-4 hover:bg-slate-200 pl-3 pr-2 rounded-md py-1 ${
            option === rowsPerPage ? 'text-green-600 bg-slate-200' : ''
          }`}
          onClick={() => selectHandler(option)}
        >
          <span>{option} / page</span>
          {option === rowsPerPage && <CheckIcon className="h-4 w-4" />}
        </div>
      ))}
    </div>
  );
};

export default Options;
