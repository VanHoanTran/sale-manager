import { Customer as CustomerProps } from '../../../constants/Props';
import Title from '../../common/Title';
import Address from './Address';
import Contact from './Contact';
import Overview from './OverView';

const Customer = ({ customer }: { customer: CustomerProps }) => {
  return (
    <div className="flex flex-col">
      <Title>Customer</Title>
      <Overview customer={customer} />
      <hr className="my-4" />
      <Title>Contact</Title>
      <Contact customer={customer} />
      <hr className="my-4" />
      <Title>Shipping Address</Title>
      <Address address={customer.shippingAddress} />
      <hr className="my-4" />
      <Title>Billing Address</Title>
      <Address address={customer.billingAddress} />
    </div>
  );
};

export default Customer;
