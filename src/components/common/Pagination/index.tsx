import { PaginationProps } from '../../../constants/Props';
import Menu from './Menu';
import PaginationButtons from './PaginationButtons';

const Pagination = ({ siblingPage, boundaryPage }: PaginationProps) => {
  return (
    <div className="px-2 py-3 flex justify-between">
      <PaginationButtons
        siblingPage={siblingPage}
        boundaryPage={boundaryPage}
      />
      <Menu />
    </div>
  );
};

export default Pagination;
