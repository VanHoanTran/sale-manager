import { Customer as CustomerProps } from '../../../constants/Props';

const Overview = ({ customer }: { customer: CustomerProps }) => {
  return (
    <div className="flex items-center">
      <div className="flex h-16 w-16 flex-shrink-0 justify-center overflow-hidden rounded-full ">
        <img src={customer.photo} alt="person" />
      </div>

      <div className="ml-2 block">
        <p className="text-sm font-light text-slate-600 ">{customer.name}</p>
        <p>{customer.email}</p>
      </div>
    </div>
  );
};

export default Overview;
