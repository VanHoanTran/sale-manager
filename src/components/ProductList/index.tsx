import { products } from '../../data/products';
import { Table } from '../common/Table';
import TableRow from '../common/Table/TableBodyRow';
import ProductCategory from './ProductCategory';
import ProductName from './ProductName';
import ProductPrice from './ProductPrice';
import ProductQuantity from './ProductQuantity';
import ProductStatus from './ProductStatus';
import Title from '../common/Title';
import { Product } from '../../constants/Props';
import Pagination from '../common/Pagination';
import Container from '../common/Containers/ListContainer';
import ActionsProvider from '../../contexts/ActionsProvider';
import ActionGroup from '../common/Actions/ActionGroup';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import ActionList from '../common/Actions/ActionList';
import ActionItem from '../common/Actions/ActionItem';
import Toggle from '../common/Actions/Toggle';
import SortProvider from '../../contexts/SortProvider';
const titles = [
  { title: 'name', keySort: 'name' },
  { title: 'category', keySort: 'category' },
  { title: 'quantity', keySort: 'quantity' },
  { title: 'status', keySort: 'status' },
  { title: 'price', keySort: 'price' },
  { title: '', keySort: '' },
];

const ProductList = () => {
  const handleDelete = () => {
    console.log('delete');
  };
  const handleEdit = () => {
    console.log('edit');
  };
  return (
    <Container>
      <SortProvider>
        <Title>Products</Title>
        <ActionsProvider>
          <Table data={products as []} titles={titles as []}>
            <Table.Header />
            <Table.Body
              render={(product: Product) => (
                <TableRow key={product.id}>
                  <ProductName product={product} />
                  <ProductCategory product={product} />
                  <ProductQuantity product={product} />
                  <ProductStatus product={product} />
                  <ProductPrice product={product} />
                  <ActionGroup>
                    <Toggle id={product.id} />
                    <ActionList id={product.id}>
                      <ActionItem icon={<TrashIcon />} onClick={handleDelete}>
                        Delete
                      </ActionItem>
                      <ActionItem icon={<PencilIcon />} onClick={handleEdit}>
                        Edit
                      </ActionItem>
                    </ActionList>
                  </ActionGroup>
                </TableRow>
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

export default ProductList;
