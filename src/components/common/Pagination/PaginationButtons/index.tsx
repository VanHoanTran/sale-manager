import {
  PaginationProps,
  TableContextProps,
} from '../../../../constants/Props';
import ButtonWrapper from './ButtonWrapper';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import ButtonGroup from './ButtonGroup';
import { useTable } from '../../Table';

const NUMBER_OF_ELLIPSIS = 2;
const NUMBER_OF_CENTER_BUTTON = 1;

const Pagination = ({ siblingPage = 1, boundaryPage = 1 }: PaginationProps) => {
  const { totalPage, currentPage, setCurrentPage } =
    useTable() as TableContextProps;

  //  |boundaries|ellipsis|siblingButtons|centerButton|siblingButtons|ellipsis||boundaries|
  const numberOfCenterButtons = siblingPage * 2 + NUMBER_OF_CENTER_BUTTON;
  const numberOfBoundaryButtons = boundaryPage * 2;
  const numberOfPresentingButtons =
    numberOfBoundaryButtons + NUMBER_OF_ELLIPSIS + numberOfCenterButtons;
  const handlePrev = () => {
    if (currentPage === 1) return;
    setCurrentPage?.(cur => cur - 1);
  };
  const handleNext = () => {
    if (currentPage === totalPage) return;
    setCurrentPage?.(cur => cur + 1);
  };
  const onEllipsisHandler = (value: number | string) => {
    if (typeof value === 'string') return;
    setCurrentPage?.(value);
  };

  // total button values presenting in an array from 1 to totalPage
  const buttonValues = Array.from(
    { length: totalPage },
    (_, index) => index + 1,
  );

  const currentPageIndex = currentPage - 1;

  // calculate leftEllipsis's Value
  const minLeftEllipsisIndex = boundaryPage;
  const indexBeforeFistSiblingPage = currentPageIndex - siblingPage - 1;
  const leftEllipsisIndex =
    indexBeforeFistSiblingPage < 0 ? 0 : indexBeforeFistSiblingPage;

  const leftEllipsisValue: number | string =
    buttonValues[minLeftEllipsisIndex] >= buttonValues[leftEllipsisIndex]
      ? buttonValues[minLeftEllipsisIndex]
      : '...';
  // calculate rightEllipsis's Value
  const lastIndex = totalPage - 1;
  const maxRightEllipsisIndex = totalPage - 1 - boundaryPage;
  const indexAfterLastSiblingPage = currentPageIndex + siblingPage + 1;
  const rightEllipsisIndex =
    indexAfterLastSiblingPage > lastIndex
      ? lastIndex
      : indexAfterLastSiblingPage;

  const rightEllipsisValue: number | string =
    buttonValues[maxRightEllipsisIndex] <= buttonValues[rightEllipsisIndex]
      ? buttonValues[maxRightEllipsisIndex]
      : '...';

  const leftBoundaryButtonValues = buttonValues.slice(0, boundaryPage);
  const rightBoundaryButtonValues = buttonValues.slice(
    totalPage - boundaryPage,
    totalPage,
  );
  const middleButtons =
    typeof leftEllipsisValue === 'number'
      ? buttonValues.slice(
          leftEllipsisValue, //get value after left Ellipsis;
          leftEllipsisValue + numberOfCenterButtons,
        )
      : typeof rightEllipsisValue === 'number'
      ? buttonValues.slice(
          rightEllipsisValue - 1 - numberOfCenterButtons, // get value from right ellipsis index back numberOfCenterButtons steps
          rightEllipsisValue - 1, // exclude right ellipsis value
        )
      : buttonValues.slice(
          currentPageIndex - siblingPage, // get value from first sibling
          currentPageIndex + siblingPage + 1, // get value to last sibling
        );

  return (
    <div className="flex items-center gap-2">
      <ButtonWrapper disable={currentPage <= 1} onClick={handlePrev}>
        <ChevronLeftIcon className="h-4 w-4" />
      </ButtonWrapper>

      {totalPage > numberOfPresentingButtons ? (
        <>
          {/*TODO: left boundary */}
          <ButtonGroup buttonValues={leftBoundaryButtonValues} />

          {/*TODO: left ellipsis */}
          <ButtonWrapper
            active={currentPage === leftEllipsisValue}
            onClick={() => onEllipsisHandler(leftEllipsisValue)}
          >
            {leftEllipsisValue}
          </ButtonWrapper>
          {/*TODO: middle buttons */}
          <ButtonGroup buttonValues={middleButtons} />
          {/*TODO: right ellipsis */}
          <ButtonWrapper
            active={currentPage === rightEllipsisValue}
            onClick={() => onEllipsisHandler(rightEllipsisValue)}
          >
            {rightEllipsisValue}
          </ButtonWrapper>
          {/* right boundary buttons */}
          <ButtonGroup buttonValues={rightBoundaryButtonValues} />
        </>
      ) : (
        <ButtonGroup buttonValues={buttonValues} />
      )}

      <ButtonWrapper
        onClick={handleNext}
        disable={currentPage >= totalPage - 1}
      >
        <ChevronRightIcon className="h-4 w-4" />
      </ButtonWrapper>
    </div>
  );
};

export default Pagination;
