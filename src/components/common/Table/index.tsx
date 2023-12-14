import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  TableBodyProps,
  TableContextProps,
  Props,
} from '../../../constants/Props';
import TableHeaderCell from './TableHeaderCell';
import TableHeaderRow from './TableHeaderRow';

interface TableProps {
  children: ReactNode;
  data: [];
  titles: [];
}

const defaultValue: TableContextProps = {
  data: [],
  titles: [],
  numOfColumns: 0,
  totalPage: 0,
  currentPage: 1,
  rowsPerPage: 10,
};

const TableContext = createContext<TableContextProps | null>(defaultValue);

const Table = ({ children, data, titles }: TableProps) => {
  const [rowsPerPage, setRowsPerPage] = useState(defaultValue.rowsPerPage);
  const [currentPage, setCurrentPage] = useState(defaultValue.currentPage);

  const totalPage =
    data.length % rowsPerPage > 1
      ? data.length / rowsPerPage + 1
      : data.length / rowsPerPage;
  useEffect(() => {
    setCurrentPage(1);
  }, [rowsPerPage]);

  const value: TableContextProps = {
    numOfColumns: titles.length,
    totalPage,
    rowsPerPage,
    setRowsPerPage,
    currentPage,
    setCurrentPage,
    titles,
    data,
  };

  return (
    <TableContext.Provider value={value}>
      <div className="w-full overflow-auto">
        <table className="min-w-full table-auto overflow-hidden  border-slate-200 shadow-md  ">
          {children}
        </table>
      </div>
    </TableContext.Provider>
  );
};

const Header = () => {
  const { titles } = useContext(TableContext) as TableContextProps;
  return (
    <thead>
      <TableHeaderRow>
        {titles &&
          titles.map(({ title, keySort }) => (
            <TableHeaderCell key={title} title={title} keySort={keySort} />
          ))}
      </TableHeaderRow>
    </thead>
  );
};

const Body = ({ render }: TableBodyProps) => {
  const { numOfColumns, currentPage, data, rowsPerPage } = useContext(
    TableContext,
  ) as TableContextProps;

  if (!data?.length)
    return (
      <tbody>
        <tr>
          <td
            className=" p-10 text-center text-xl font-semibold"
            colSpan={numOfColumns}
          >
            No data to show at this moment
          </td>
        </tr>
      </tbody>
    );
  return (
    <tbody>
      {data
        .slice((currentPage - 1) * rowsPerPage, rowsPerPage * currentPage)
        .map(render)}
    </tbody>
  );
};

const Footer = ({ children }: Props) => {
  const { numOfColumns } = useTable() as TableContextProps;
  return (
    <tfoot className=" bg-slate-100 ">
      <tr>
        <td colSpan={numOfColumns}>{children}</td>
      </tr>
    </tfoot>
  );
};

const useTable = () => {
  const context = useContext(TableContext);
  if (context === undefined)
    throw new Error('TableContext was used outside Table context provider');

  return context;
};

Table.Header = Header;
Table.Body = Body;
Table.Footer = Footer;
export { Table, useTable };
