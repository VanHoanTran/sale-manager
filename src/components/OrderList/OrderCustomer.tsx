import { Transaction } from '../../constants/Props';

const OrderCustomer = ({ customer }: { customer: Transaction['customer'] }) => {
  return (
    <td>
      <span className="px-2 font-light">{customer}</span>
    </td>
  );
};

export default OrderCustomer;
