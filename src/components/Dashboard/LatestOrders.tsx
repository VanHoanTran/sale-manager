import { Transaction } from '../../constants/Props';
import SortProvider from '../../contexts/SortProvider';
import { transactions } from '../../data/transactions';
import OrderCustomer from '../OrderList/OrderCustomer';
import OrderDate from '../OrderList/OrderDate';
import OrderNumber from '../OrderList/OrderNumber';
import OrderPayment from '../OrderList/OrderPayment';
import OrderStatus from '../OrderList/OrderStatus';
import OrderTotal from '../OrderList/OrderTotal';
import { Table } from '../common/Table';
import TableBodyRow from '../common/Table/TableBodyRow';
import Title from '../common/Title';

const titles = [
  { title: 'order', keySort: '' },
  { title: 'date', keySort: '' },
  { title: 'customer', keySort: '' },
  { title: 'status', keySort: '' },
  { title: 'payment method', keySort: '' },
  { title: 'total', keySort: '' },
];

const LatestOrders = () => {
  return (
    <div className="grid-item-border xl:col-span-2">
      <Title>Latest Orders</Title>
      <div>
        <SortProvider>
          <Table data={transactions.slice(0, 6) as []} titles={titles as []}>
            <Table.Header />
            <Table.Body
              render={(trans: Transaction) => (
                <TableBodyRow>
                  <OrderNumber id={trans.id} />
                  <OrderDate date={trans.date} />
                  <OrderCustomer customer={trans.customer} />
                  <OrderStatus status={trans.status} />
                  <OrderPayment
                    paymentIdentifier={trans.paymentIdentifier}
                    paymentMethod={trans.paymentMethod}
                  />
                  <OrderTotal total={trans.totalAmount} />
                  {/* <ActionGroup>
                  <Toggle id={trans.id.toString()} />
                  <ActionList id={trans.id.toString()}>
                    <ActionItem icon={<TrashIcon />} onClick={handleDelete}>
                      Delete
                    </ActionItem>
                    <ActionItem icon={<PencilIcon />} onClick={handleEdit}>
                      Edit
                    </ActionItem>
                  </ActionList>
                </ActionGroup> */}
                </TableBodyRow>
              )}
            />
            {/* <Table.Footer>
            <Pagination />
          </Table.Footer> */}
          </Table>
        </SortProvider>
      </div>
    </div>
  );
};

export default LatestOrders;
