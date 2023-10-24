import {
  ChevronDownIcon,
  ChevronUpDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/20/solid';
import { useSortContext } from '../../../contexts/SortContext';

const SortIconButton = ({ keySort }: { keySort: string }) => {
  const { sortField, sortType } = useSortContext();

  return (
    <span className="flex justify-center items-center ">
      {sortField === keySort && sortType === 'asc' ? (
        <ChevronUpIcon className=" h-4 w-4 text-green-600" />
      ) : sortField === keySort && sortType === 'dsc' ? (
        <ChevronDownIcon className="h-4 w-4 text-green-600" />
      ) : (
        <ChevronUpDownIcon
          className={`h-4 w-4 ${sortField === keySort ? 'text-green-600' : ''}`}
        />
      )}
    </span>
  );
};

export default SortIconButton;
