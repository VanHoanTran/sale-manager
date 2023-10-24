import { Product } from '../../constants/Props';

const ProductPrice = ({ product }: { product: Product }) => {
  return (
    <td>
      <span className="px-2 font-light">${product.price}.00</span>
    </td>
  );
};

export default ProductPrice;
