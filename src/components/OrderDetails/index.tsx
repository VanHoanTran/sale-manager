import { useParams } from 'react-router-dom';
import ListContainer from '../common/Containers/ListContainer';
import Title from '../common/Title';
import { Table } from '../common/Table';
import TableBodyRow from '../common/Table/TableBodyRow';
import { Product } from '../../constants/Props';
import ProductName from '../ProductList/ProductName';
import ProductPrice from '../ProductList/ProductPrice';
import ProductQuantity from '../ProductList/ProductQuantity';
import { order } from '../../data/orders';
import Total from './Customer/Total';
import Customer from './Customer';
import Payment from './Customer/Payment';
import SvgWrapper from '../common/SvgWrapper';
import { CalendarIcon } from '@heroicons/react/24/outline';

const titles = [
  { title: 'Product', keySort: '' },
  { title: 'Price', keySort: '' },
  { title: 'Quantity', keySort: '' },
  { title: 'Total', keySort: '' },
];

const OrderDetails = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <ListContainer>
      <Title>Order #{order.id}</Title>
      <div className="-mt-3 mb-4 flex items-center justify-start gap-2 text-sm italic text-slate-400">
        <SvgWrapper size="sm">
          <CalendarIcon />
        </SvgWrapper>
        <div>{`${new Intl.DateTimeFormat('en-US', {
          dateStyle: 'medium',
          timeStyle: 'short',
        }).format(new Date(1703186834 * 1000))}`}</div>
      </div>
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
        <div className=" grid auto-rows-min grid-cols-4 xl:col-span-2">
          <div className=" col-span-4 ">
            <Table
              key={'latest orders'}
              data={order.items as []}
              titles={titles as []}
            >
              <Table.Header />
              <Table.Body
                render={(item: Product) => (
                  <TableBodyRow onClick={() => {}} key={item.id}>
                    <ProductName product={item} />
                    <ProductPrice product={item} />
                    <ProductQuantity product={item} />
                    <Total product={item} />
                  </TableBodyRow>
                )}
              />
            </Table>
          </div>
          <div className="col-span-4 mt-4 xl:col-span-2 xl:col-start-3 ">
            <Payment subtotal={418} delivery={15} tax={418 * 0.13} />
          </div>
        </div>
        <div className=" rounded-xl border border-slate-200 ">
          <ListContainer>
            <Customer customer={order.customer} />
          </ListContainer>
        </div>
      </div>
    </ListContainer>
  );
};

export default OrderDetails;
