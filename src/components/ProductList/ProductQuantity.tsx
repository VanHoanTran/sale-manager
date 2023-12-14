import { Product } from '../../constants/Props';

const ProductQuantity = ({ product }: { product: Product }) => {
  return (
    <td>
      <div className="flex pl-9 font-light items-center px-2 ">
        {product.quantity}
      </div>
    </td>
  );
};

export default ProductQuantity;
