import { TableContextProps } from '../../../../constants/Props';
import { useTable } from '../../Table';
import ButtonWrapper from './ButtonWrapper';

interface ButtonGroupProps {
  buttonValues: number[];
}

const ButtonGroup = ({ buttonValues }: ButtonGroupProps) => {
  const { currentPage, setCurrentPage } = useTable() as TableContextProps;

  return (
    <>
      {buttonValues.map(value => (
        <ButtonWrapper
          active={currentPage === value}
          onClick={() => setCurrentPage?.(value)}
        >
          {value}
        </ButtonWrapper>
      ))}
    </>
  );
};

export default ButtonGroup;
