import { Transaction } from '../../constants/Props';

const OrderTotal = ({ trans }: { trans: Transaction }) => {
  return (
    <td>
      <span className="px-2 font-light">${trans.totalAmount}.00</span>
    </td>
  );
};

export default OrderTotal;
