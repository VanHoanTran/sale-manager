import { Props } from '../../../constants/Props';

const ListContainer = ({ children }: Props) => {
  return (
    <div className="relative flex h-full flex-auto flex-col px-4 py-4 sm:px-6 sm:py-6 md:px-8">
      {children}
    </div>
  );
};

export default ListContainer;
