import { Props } from '../../../constants/Props';

const ActionGroup = ({ children }: Props) => {
  return (
    <td className="px-2 font-light">
      <div className="bg-inherit">{children}</div>
    </td>
  );
};

export default ActionGroup;
