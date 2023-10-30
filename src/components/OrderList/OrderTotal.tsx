import { Transaction } from '../../constants/Props';

const OrderTotal = ({ total }: { total: Transaction['totalAmount'] }) => {
  return (
    <td>
      <span className="px-2 font-light">${total}.00</span>
    </td>
  );
};

export default OrderTotal;
