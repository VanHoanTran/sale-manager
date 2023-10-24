import { SortProvider } from '../../contexts/SortContext';

import Table from '../common/Table';
import TableRow from '../common/Table/TableBodyRow';
// import ProductCategory from './ProductCategory';
// import ProductName from './ProductName';
// import ProductPrice from './ProductPrice';
// import ProductQuantity from './ProductQuantity';
// import ProductStatus from './ProductStatus';
import Title from '../common/Title';
import { Transaction } from '../../constants/Props';
import { transactions } from '../../data/transactions';
import OrderNumber from './OrderNumber';
import OrderDate from './OrderDate';
import OrderCustomer from './OrderCustomer';
import OrderStatus from './OrderStatus';
import OrderTotal from './OrderTotal';
import OrderPayment from './OrderPayment';
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
      <Table>
        <Table.Header titles={titles} />
        <Table.Body
          data={transactions}
          render={(trans: Transaction) => (
            <TableRow>
              <OrderNumber trans={trans} />
              <OrderDate trans={trans} />
              <OrderCustomer trans={trans} />
              <OrderStatus trans={trans} />
              <OrderPayment trans={trans} />
              <OrderTotal trans={trans} />
              <td>...</td>
            </TableRow>
          )}
        />
      </Table>
    </SortProvider>
  );
};

export default OrderList;
