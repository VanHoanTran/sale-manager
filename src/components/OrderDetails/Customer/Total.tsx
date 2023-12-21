import { Product } from '../../../constants/Props';

const Total = ({ product }: { product: Product }) => {
  return (
    <td>
      <div className="products-center flex px-2 pl-9 font-light ">
        {`$${product.price * product.quantity}.00`}
      </div>
    </td>
  );
};

export default Total;
