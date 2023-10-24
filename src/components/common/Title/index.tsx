import { Props } from '../../../constants/Props';

const index = ({ children }: Props) => {
  return (
    <h1 className="text-3xl font-semibold tracking-wide py-4">{children}</h1>
  );
};

export default index;
