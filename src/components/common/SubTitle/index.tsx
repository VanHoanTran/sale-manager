import { Props } from '../../../constants/Props';

const SubTitle = ({ children }: Props) => {
  return (
    <h2 className="-mt-4  mb-4 text-sm font-light text-slate-500">
      {children}
    </h2>
  );
};

export default SubTitle;
