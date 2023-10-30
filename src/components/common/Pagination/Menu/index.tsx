import { useState } from 'react';
import { useTable } from '../../Table';
import { TableContextProps } from '../../../../constants/Props';
import Toggle from './Toggle';
import Options from './Options';

const Menu = () => {
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
    <div className="relative flex-shrink-0 block text-left font-light text-md">
      <Toggle showHandler={showHandler} rowsPerPage={rowsPerPage} />
      <Options
        show={show}
        selectHandler={selectHandler}
        close={close}
        rowsPerPage={rowsPerPage}
      />
    </div>
  );
};

export default Menu;
