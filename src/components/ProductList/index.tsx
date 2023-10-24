import { SortProvider } from '../../contexts/SortContext';
import { products } from '../../data/products';
import Table from '../common/Table';
import TableRow from '../common/Table/TableBodyRow';
import ProductCategory from './ProductCategory';
import ProductName from './ProductName';
import ProductPrice from './ProductPrice';
import ProductQuantity from './ProductQuantity';
import ProductStatus from './ProductStatus';
import Title from '../common/Title';
import { Product } from '../../constants/Props';
const titles = [
  { title: 'name', keySort: 'name' },
  { title: 'category', keySort: 'category' },
  { title: 'quantity', keySort: 'quantity' },
  { title: 'status', keySort: 'status' },
  { title: 'price', keySort: 'price' },
  { title: '', keySort: '' },
];

const ProductList = () => {
  return (
    <SortProvider>
      <Title>Products</Title>

      <Table>
        <Table.Header titles={titles} />
        <Table.Body
          data={products}
          render={(product: Product) => (
            <TableRow>
              <ProductName product={product} />
              <ProductCategory product={product} />
              <ProductQuantity product={product} />
              <ProductStatus product={product} />
              <ProductPrice product={product} />
              <td></td>
            </TableRow>
          )}
        />
      </Table>
    </SortProvider>
  );
};

export default ProductList;