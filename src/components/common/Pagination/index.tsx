import { PaginationProps } from '../../../constants/Props';
import DropDown from './DropDown';
import PaginationButtons from './PaginationButtons';

const Pagination = ({
  siblingPage,
  boundaryPage,
  selections,
}: PaginationProps) => {
  return (
    <div className="flex justify-between px-2 py-3">
      <PaginationButtons
        siblingPage={siblingPage}
        boundaryPage={boundaryPage}
      />
      <DropDown selections={selections} />
    </div>
  );
};

export default Pagination;
