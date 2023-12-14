import Label from './Label';
import Input from './Input';
import Error from './Error';
import Select from '../Select/index';

type Props = {
  placeholder?: string;
  type?: string;
  validate?: object;
  name: string;
  label: string;
  prefix?: string;
  options?: string[];
  tag?: boolean;
};
const InputField = ({
  options,
  validate,
  prefix,
  name,
  label,
  ...rest
}: Props) => {
  return (
    <div className="relative m-2 flex flex-col">
      <Label name={name} label={label} />
      {options ? (
        <Select options={options} name={name} {...rest} />
      ) : (
        <Input name={name} validate={validate} prefix={prefix} {...rest} />
      )}

      <Error name={name} />
    </div>
  );
};

export default InputField;
