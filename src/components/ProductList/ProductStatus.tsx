import { Product } from '../../constants/Props';

const ProductStatus = ({ product }: { product: Product }) => {
  return (
    <td>
      <div
        className={`flex items-center  font-semibold px-2 ${
          product.quantity === 0
            ? 'text-red-400'
            : product.quantity < 10
            ? 'text-yellow-500'
            : 'text-green-600'
        }`}
      >
        <span
          className={`inline-block flex-shrink-0 h-2 w-2 mr-2 rounded-full ${
            product.quantity === 0
              ? 'bg-red-400'
              : product.quantity < 10
              ? 'bg-yellow-500'
              : 'bg-green-600'
          }`}
        ></span>
        <span>{product.status}</span>
      </div>
    </td>
  );
};

export default ProductStatus;
