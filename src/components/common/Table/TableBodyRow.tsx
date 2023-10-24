import { Props } from '../../../constants/Props';
const TableBodyRow = ({ children }: Props) => {
  return (
    <tr className="border-b text-sm [&>td]:h-20  border-slate-200 hover:bg-slate-100 ">
      {children}
    </tr>
  );
};

export default TableBodyRow;
