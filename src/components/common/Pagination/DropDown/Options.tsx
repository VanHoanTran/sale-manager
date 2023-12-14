import { CheckIcon } from '@heroicons/react/24/outline';
import useOutsideClick from '../../../../hooks/useOutsideClick';

interface OptionsProps {
  rowsPerPage: number;
  show: boolean;
  selections?: number[];
  close: () => void;
  selectHandler: (option: number) => void;
}

const defaultSelections = [5, 10, 20, 50, 100];
const Options = ({
  rowsPerPage,
  show,
  close,
  selectHandler,
  selections = defaultSelections,
}: OptionsProps) => {
  const { ref } = useOutsideClick(close);
  return (
    <div
      ref={ref}
      className={`absolute bottom-9 right-0 w-full rounded-md border border-slate-300 bg-slate-100 ${
        show ? 'block' : 'hidden'
      }`}
    >
      {selections.map(option => (
        <div
          key={option}
          className={` flex w-full items-center gap-4 rounded-md py-1 pl-3 pr-2 hover:bg-slate-200 ${
            option === rowsPerPage ? 'bg-slate-200 text-green-600' : ''
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
