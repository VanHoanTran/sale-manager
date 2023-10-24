import { Transaction } from '../../constants/Props';

const OrderCustomer = ({ trans }: { trans: Transaction }) => {
  return (
    <td>
      <span className="px-2 font-light">{trans.customer}</span>
    </td>
  );
};

export default OrderCustomer;
