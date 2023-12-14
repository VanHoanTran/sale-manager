import { Props } from '../../../constants/Props';

const Title = ({ children }: Props) => {
  return (
    <h1 className="pb-4 text-2xl font-semibold tracking-wider text-slate-600">
      {children}
    </h1>
  );
};

export default Title;
