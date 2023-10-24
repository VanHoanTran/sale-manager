import { Props } from '../../../constants/Props';
const TableHeaderRow = ({ children }: Props) => {
  return (
    <tr className="border-b border-slate-200 bg-slate-100 ">{children}</tr>
  );
};

export default TableHeaderRow;
