import { Transaction } from '../../constants/Props';

const OrderStatus = ({ trans }: { trans: Transaction }) => {
  return (
    <td>
      <div
        className={`flex items-center capitalize font-semibold px-2 ${[
          trans.status === 'failed' && 'text-red-400',
          trans.status === 'pending' && 'text-yellow-500',
          trans.status === 'paid' && 'text-green-600',
        ].join(' ')}`}
      >
        <span
          className={`inline-block flex-shrink-0 h-2 w-2 mr-2 rounded-full ${[
            trans.status === 'failed' && 'bg-red-400',
            trans.status === 'pending' && 'bg-yellow-500',
            trans.status === 'paid' && 'bg-green-600',
          ].join(' ')}`}
        ></span>
        <span>{trans.status}</span>
      </div>
    </td>
  );
};

export default OrderStatus;
