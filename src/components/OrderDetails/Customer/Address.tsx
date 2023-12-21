import { Address as AddressProps } from '../../../constants/Props';

const Address = ({ address }: { address: AddressProps }) => {
  const { street, city, province, country, postalCode } = address;
  return (
    <div>
      <p>{street}</p>
      <p>{city}</p>
      <p>
        {province}, {postalCode}
      </p>
      <p>{country}</p>
    </div>
  );
};

export default Address;
