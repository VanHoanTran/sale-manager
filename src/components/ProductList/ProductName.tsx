import { Product } from '../../constants/Props';

const ProductName = ({ product }: { product: Product }) => {
  return (
    <td>
      <div className="flex w-full font-semibold items-center py-2 px-2">
        <span className="flex-shrink-0">
          <img
            className=" w-10 h-10 rounded-lg mr-2 border border-slate-200"
            src={`/product-images/${product.id}.jpeg`}
            alt=""
          />
        </span>
        <span className="pr-10 min-w-[10rem]">{product.name}</span>
      </div>
    </td>
  );
};

export default ProductName;
