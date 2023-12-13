import { CheckIcon } from '@heroicons/react/24/outline';
import useOutsideClick from '../../../hooks/useOutsideClick';

interface OptionsProps {
  options: string[];
  currentValue: string;
  show: boolean;
  close: () => void;
  selectHandler: (option: string) => void;
}

const Options = ({
  currentValue,
  show,
  close,
  selectHandler,
  options,
}: OptionsProps) => {
  const { ref } = useOutsideClick(close);
  return (
    <div
      ref={ref}
      className={`absolute right-0 top-[calc(100%_+_.25em)] z-10 max-h-48 w-full overflow-y-hidden rounded-md  border border-slate-400  bg-white ${
        show ? 'block' : 'hidden'
      }`}
    >
      <div className=" max-h-48 overflow-y-auto py-2">
        {options.length > 0 ? (
          options.map(option => (
            <div
              key={option}
              className={` flex w-full items-center justify-between py-1 pl-3 pr-2 hover:bg-slate-100 ${
                option === currentValue ? 'bg-slate-100 text-green-600' : ''
              }`}
              onClick={() => selectHandler(option)}
            >
              <span>{option}</span>
              <span>
                {option === currentValue && <CheckIcon className="h-4 w-4" />}
              </span>
            </div>
          ))
        ) : (
          <div
            className={`flex w-full items-center justify-center py-1 pl-3 pr-2 text-sm `}
          >
            <span>There is no option available</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Options;
