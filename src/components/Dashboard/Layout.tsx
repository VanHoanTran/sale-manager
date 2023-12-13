import { Props } from '../../constants/Props';

const Grid = ({ children }: Props) => {
  return (
    <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-3">{children}</div>
  );
};

export default Grid;
