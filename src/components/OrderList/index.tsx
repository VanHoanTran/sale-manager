import { Table } from '../common/Table';
import TableBodyRow from '../common/Table/TableBodyRow';
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
import Container from '../common/Containers/ListContainer';
import ActionGroup from '../common/Actions/ActionGroup';
import Toggle from '../common/Actions/Toggle';
import ActionList from '../common/Actions/ActionList';
import ActionItem from '../common/Actions/ActionItem';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import ActionsProvider from '../../contexts/ActionsProvider';
import SortProvider from '../../contexts/SortProvider';
import { useNavigate } from 'react-router-dom';
import paths from '../../paths';
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
  const navigate = useNavigate();

  const handleOnClick = (id: string) => {
    navigate(paths.orderDetails({ id }));
  };
  const handleDelete = () => {
    console.log('Delete');
  };

  const handleEdit = () => {
    console.log('Edit');
  };

  return (
    <Container>
      <SortProvider>
        <Title>Order List</Title>
        <ActionsProvider>
          <Table data={transactions as []} titles={titles as []}>
            <Table.Header />
            <Table.Body
              render={(trans: Transaction) => (
                <TableBodyRow
                  onClick={() => handleOnClick(trans.id.toString())}
                >
                  <OrderNumber id={trans.id} />
                  <OrderDate date={trans.date} />
                  <OrderCustomer customer={trans.customer} />
                  <OrderStatus status={trans.status} />
                  <OrderPayment
                    paymentIdentifier={trans.paymentIdentifier}
                    paymentMethod={trans.paymentMethod}
                  />
                  <OrderTotal total={trans.totalAmount} />
                  <ActionGroup>
                    <Toggle id={trans.id.toString()} />
                    <ActionList id={trans.id.toString()}>
                      <ActionItem icon={<TrashIcon />} onClick={handleDelete}>
                        Delete
                      </ActionItem>
                      <ActionItem icon={<PencilIcon />} onClick={handleEdit}>
                        Edit
                      </ActionItem>
                    </ActionList>
                  </ActionGroup>
                </TableBodyRow>
              )}
            />
            <Table.Footer>
              <Pagination />
            </Table.Footer>
          </Table>
        </ActionsProvider>
      </SortProvider>
    </Container>
  );
};

export default OrderList;
