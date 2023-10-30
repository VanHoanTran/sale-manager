import { SortProvider } from '../../contexts/SortContext';
import { Table } from '../common/Table';
import TableRow from '../common/Table/TableBodyRow';
import Title from '../common/Title';
import { Transaction } from '../../constants/Props';
import { transactions } from '../../data/transactions';
import OrderNumber from './OrderNumber';
import OrderDate from './OrderDate';
import OrderCustomer from './OrderCustomer';
import OrderStatus from './OrderStatus';
import OrderTotal from './OrderTotal';
import OrderPayment from './OrderPayment';
import Pagination from '../common/Pagination';
const titles = [
  { title: 'order', keySort: 'order' },
  { title: 'date', keySort: 'date' },
  { title: 'customer', keySort: 'customer' },
  { title: 'status', keySort: 'status' },
  { title: 'payment method', keySort: 'payment_method' },
  { title: 'total', keySort: 'total' },
  { title: '', keySort: '' },
];

const OrderList = () => {
  return (
    <SortProvider>
      <Title>Products</Title>
      <Table data={transactions as []} titles={titles as []}>
        <Table.Header />
        <Table.Body
          render={(trans: Transaction) => (
            <TableRow>
              <OrderNumber id={trans.id} />
              <OrderDate date={trans.date} />
              <OrderCustomer customer={trans.customer} />
              <OrderStatus status={trans.status} />
              <OrderPayment
                paymentIdentifier={trans.paymentIdentifier}
                paymentMethod={trans.paymentMethod}
              />
              <OrderTotal total={trans.totalAmount} />
              <td>...</td>
            </TableRow>
          )}
        />
        <Table.Footer>
          <Pagination />
        </Table.Footer>
      </Table>
    </SortProvider>
  );
};

export default OrderList;
