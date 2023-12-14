import { useState } from 'react';
import { useTable } from '../../Table';
import { TableContextProps } from '../../../../constants/Props';
import Toggle from './Toggle';
import Options from './Options';

interface DropDownProps {
  selections?: number[];
}

const DropDown = ({ selections }: DropDownProps) => {
  const { setRowsPerPage, rowsPerPage } = useTable() as TableContextProps;
  const [show, setShow] = useState(false);
  const close = () => setShow(false);
  const showHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShow(show => !show);
  };

  const selectHandler = (option: number) => {
    setRowsPerPage?.(option);
    close();
  };

  return (
    <div className="text-md relative block flex-shrink-0 text-left font-light">
      <Toggle showHandler={showHandler} rowsPerPage={rowsPerPage} />
      <Options
        selections={selections}
        show={show}
        selectHandler={selectHandler}
        close={close}
        rowsPerPage={rowsPerPage}
      />
    </div>
  );
};

export default DropDown;
