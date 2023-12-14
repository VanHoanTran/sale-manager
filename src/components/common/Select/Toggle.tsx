import Input from '../InputField/Input';
import SvgWrapper from '../SvgWrapper';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

type Props = {
  name: string;
  show: boolean;
  showHandler: (e: React.MouseEvent) => void;
};
const Toggle = ({ showHandler, show, name, ...rest }: Props) => {
  return (
    <div
      className=" flex w-full flex-shrink items-center justify-between"
      onClick={showHandler}
    >
      <Input name={name} {...{ ...rest, readOnly: true }} />
      <span className=" absolute right-2 text-slate-400">
        <SvgWrapper size="sm">
          {show ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </SvgWrapper>
      </span>
    </div>
  );
};

export default Toggle;
