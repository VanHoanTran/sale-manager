import { Props } from '../../../constants/Props';
const TableBodyRow = ({ children }: Props) => {
  return (
    <tr className="border-b border-slate-200 text-sm  hover:bg-slate-100 [&>td]:h-20 ">
      {children}
    </tr>
  );
};

export default TableBodyRow;
