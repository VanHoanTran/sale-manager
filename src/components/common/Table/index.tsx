import {
  HeaderTableProps,
  TableBodyProps,
  Props,
} from '../../../constants/Props';
import TableHeaderCell from './TableHeaderCell';
import TableHeaderRow from './TableHeaderRow';

const Table = ({ children }: Props) => {
  return (
    <div className="w-full overflow-auto">
      <table className="table-auto min-w-full shadow-md border border-solid border-slate-200 overflow-hidden rounded-lg ">
        {children}
      </table>
    </div>
  );
};

const Header = ({ titles }: HeaderTableProps) => {
  return (
    <thead>
      <TableHeaderRow>
        {titles.map(({ title, keySort }) => (
          <TableHeaderCell key={title} title={title} keySort={keySort} />
        ))}
      </TableHeaderRow>
    </thead>
  );
};

const Body = ({ data, render }: TableBodyProps) => {
  if (!data.length)
    return (
      <div className=" text-center text-xl font-semibold p-10">
        No data to show at this moment
      </div>
    );
  return <tbody>{data.map(render)}</tbody>;
};

Table.Header = Header;
Table.Body = Body;
export default Table;
