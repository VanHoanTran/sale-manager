import { TableHeaderProps } from '../../../constants/Props';
import { useSortContext } from '../../../contexts/SortContext';
import SortIconButton from '../Buttons/SortIconButton';

const TableHeaderCell = ({ title, keySort }: TableHeaderProps) => {
  const { sortField, sortType, setSortValue } = useSortContext();
  const isActive = sortField.toLocaleLowerCase() === title.toLocaleLowerCase();

  const handleSort = () => {
    // bypassing typeScript checking error, function will always exist
    if (setSortValue === undefined) return;
    // in case, change sort column set to asc
    if (sortField != keySort) return setSortValue(`${keySort}-asc`);
    // in case, same column asc -> dsc
    if (sortType === 'asc') return setSortValue(`${keySort}-dsc`);
    // in case, same column dsc -> none
    if (sortType === 'dsc') return setSortValue(`${keySort}-none`);
    // in case, same column none -> asc
    setSortValue(`${keySort}-asc`);
  };
  return (
    <th onClick={handleSort} className="cursor-pointer">
      <div className="px-2 py-3 flex uppercase text-sm ">
        <span className={isActive ? 'text-green-600' : ''}>{title}</span>
        {keySort === '' ? null : <SortIconButton keySort={keySort} />}
      </div>
    </th>
  );
};

export default TableHeaderCell;
