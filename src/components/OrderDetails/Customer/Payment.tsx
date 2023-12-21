import { formatCurrency } from '../../../utils';
import Title from '../../common/Title';

interface PaymentProps {
  subtotal: number;
  delivery: number;
  tax: number;
}

const Payment = ({ subtotal, delivery, tax }: PaymentProps) => {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-slate-200 p-4">
      <Title>Payment Summary</Title>
      <p className="flex justify-between">
        <span>Subtotal</span>
        <span>{formatCurrency(subtotal)}</span>
      </p>
      <p className="flex justify-between">
        <span>Delivery Fee</span>
        <span>{formatCurrency(delivery)}</span>
      </p>
      <p className="flex justify-between">
        <span>Tax(13%)</span>
        <span>{formatCurrency(tax)}</span>
      </p>
      <hr />
      <p className="flex justify-between">
        <span>Total</span>
        <span>{formatCurrency(subtotal + delivery + tax)}</span>
      </p>
    </div>
  );
};

export default Payment;
