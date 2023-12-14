import { Transaction } from '../../constants/Props';

const OrderDate = ({ date }: { date: Transaction['date'] }) => {
  return (
    <td>
      <span className="px-2 font-light">
        {new Intl.DateTimeFormat('en-US').format(new Date(date * 1000))}
      </span>
    </td>
  );
};

export default OrderDate;
