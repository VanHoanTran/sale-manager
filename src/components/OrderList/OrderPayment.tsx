import { Transaction } from '../../constants/Props';

const OrderPayment = ({ trans }: { trans: Transaction }) => {
  return (
    <td>
      <div className="flex items-center py-2 px-2">
        <img
          className="flex-shrink-0 max-h-5 mr-2"
          src={`/payment-method-images/${trans.paymentMethod}.png`}
          alt=""
        />
        <span className="pr-10 min-w-[10rem]">{trans.paymentIdentifier}</span>
      </div>
    </td>
  );
};

export default OrderPayment;
