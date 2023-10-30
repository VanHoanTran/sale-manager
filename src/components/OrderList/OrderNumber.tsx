import { Transaction } from '../../constants/Props';

const OrderNumber = ({ id }: { id: Transaction['id'] }) => {
  return (
    <td>
      <span className="px-2 font-semibold">#{id}</span>
    </td>
  );
};

export default OrderNumber;
