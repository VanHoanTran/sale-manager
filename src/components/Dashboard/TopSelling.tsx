import { Product } from '../../constants/Props';
import SortProvider from '../../contexts/SortProvider';
import { products } from '../../data/products';
import ProductName from '../ProductList/ProductName';
import ProductQuantity from '../ProductList/ProductQuantity';
import { Table } from '../common/Table';
import TableBodyRow from '../common/Table/TableBodyRow';
import Title from '../common/Title';

const titles = [
  { title: 'name', keySort: '' },
  { title: 'SOLD', keySort: '' },
];

const TopSelling = () => {
  return (
    <div className="grid-item-border">
      <Title>Top Selling</Title>
      <div>
        <SortProvider>
          <Table data={products.slice(0, 6) as []} titles={titles as []}>
            <Table.Header />
            <Table.Body
              render={(product: Product) => (
                <TableBodyRow key={product.id}>
                  <ProductName product={product} />

                  <ProductQuantity product={product} />
                </TableBodyRow>
              )}
            />
          </Table>
        </SortProvider>
      </div>
    </div>
  );
};

export default TopSelling;
