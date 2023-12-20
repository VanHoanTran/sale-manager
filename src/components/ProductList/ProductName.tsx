import { Product } from '../../constants/Props';

const ProductName = ({ product }: { product: Product }) => {
  return (
    <td>
      <div className="flex w-full items-center px-2 py-2 font-semibold">
        <span className="flex-shrink-0">
          <img
            className=" mr-2 h-10 w-10 rounded-lg border border-slate-200"
            src={product.images.at(0)}
            alt=""
          />
        </span>
        <span className="min-w-[10rem] pr-10">{product.productName}</span>
      </div>
    </td>
  );
};

export default ProductName;
