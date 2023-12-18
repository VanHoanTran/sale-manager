import {
  ChevronDownIcon,
  ChevronUpDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/20/solid';
import SvgWrapper from '../SvgWrapper';
import { useSortContext } from '../../../hooks/useSortContext';

const SortIconButton = ({ keySort }: { keySort: string }) => {
  const { sortField, sortType } = useSortContext();

  return (
    <span className="flex items-center justify-center ">
      {sortField === keySort && sortType === 'asc' ? (
        <SvgWrapper size="sm">
          <ChevronUpIcon className=" text-green-600" />
        </SvgWrapper>
      ) : sortField === keySort && sortType === 'dsc' ? (
        <SvgWrapper size="sm">
          <ChevronDownIcon className=" text-green-600" />
        </SvgWrapper>
      ) : (
        <SvgWrapper size="sm">
          <ChevronUpDownIcon
            className={sortField === keySort ? 'text-green-600' : ''}
          />
        </SvgWrapper>
      )}
    </span>
  );
};

export default SortIconButton;
