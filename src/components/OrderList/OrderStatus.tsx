import { Transaction } from '../../constants/Props';

const OrderStatus = ({ status }: { status: Transaction['status'] }) => {
  return (
    <td>
      <div
        className={`flex items-center capitalize font-semibold px-2 ${[
          status === 'failed' && 'text-red-400',
          status === 'pending' && 'text-yellow-500',
          status === 'paid' && 'text-green-600',
        ].join(' ')}`}
      >
        <span
          className={`inline-block flex-shrink-0 h-2 w-2 mr-2 rounded-full ${[
            status === 'failed' && 'bg-red-400',
            status === 'pending' && 'bg-yellow-500',
            status === 'paid' && 'bg-green-600',
          ].join(' ')}`}
        ></span>
        <span>{status}</span>
      </div>
    </td>
  );
};

export default OrderStatus;
