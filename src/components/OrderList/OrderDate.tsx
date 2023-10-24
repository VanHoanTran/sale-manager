import { Transaction } from '../../constants/Props';

const OrderDate = ({ trans }: { trans: Transaction }) => {
  return (
    <td>
      <span className="px-2 font-light">
        {new Intl.DateTimeFormat('en-US').format(new Date(trans.date * 1000))}
      </span>
    </td>
  );
};

export default OrderDate;
