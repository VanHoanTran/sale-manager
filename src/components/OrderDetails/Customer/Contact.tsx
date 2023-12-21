import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { Customer as CustomerProps } from '../../../constants/Props';
import SvgWrapper from '../../common/SvgWrapper';

const Contact = ({ customer }: { customer: CustomerProps }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4">
        <SvgWrapper>
          <EnvelopeIcon />
        </SvgWrapper>
        <span>{customer.email}</span>
      </div>
      <div className="flex gap-4">
        <SvgWrapper>
          <PhoneIcon />
        </SvgWrapper>
        <span>{customer.phone}</span>
      </div>
    </div>
  );
};

export default Contact;
