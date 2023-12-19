import { Props } from '../../../constants/Props';

interface Clickable {
  onClick: () => void;
}

type TableRowProps = Props & Clickable;
const TableBodyRow = ({ children, onClick }: TableRowProps) => {
  return (
    <tr
      onClick={onClick}
      className="border-b border-slate-200 text-sm  hover:bg-slate-100 [&>td]:h-20 "
    >
      {children}
    </tr>
  );
};

export default TableBodyRow;
