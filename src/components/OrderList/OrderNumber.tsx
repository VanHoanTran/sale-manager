import { Transaction } from '../../constants/Props';

const OrderNumber = ({ trans }: { trans: Transaction }) => {
  return (
    <td>
      <span className="px-2 font-semibold">#{trans.id}</span>
    </td>
  );
};

export default OrderNumber;
