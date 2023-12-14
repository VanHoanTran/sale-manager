import { Product } from '../../constants/Props';

const ProductCategory = ({ product }: { product: Product }) => {
  return (
    <td>
      <div className="flex font-light  mr-2 items-center pl-5 py-2 ">
        <span>{product.category} </span>
      </div>
    </td>
  );
};

export default ProductCategory;
