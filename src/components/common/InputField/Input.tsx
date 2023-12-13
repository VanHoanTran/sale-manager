import { FocusEvent } from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
  validate?: object;
  name: string;
  prefix?: string;
};

const Input = ({ prefix, name, validate, ...rest }: Props) => {
  const { register, getFieldState } = useFormContext();
  const invalid = getFieldState(name).invalid;

  const onFocus = (e: FocusEvent<HTMLInputElement>) => {
    e.currentTarget.select();
  };

  return (
    <div className="relative flex w-full items-center rounded-md font-light ">
      {prefix && (
        <span className="absolute ml-2 text-slate-400 ">{prefix}</span>
      )}
      <input
        autoComplete="off"
        id={name}
        className={`h-11 w-full rounded-md border outline-none ${
          invalid ? 'border-red-500' : 'border-slate-300 focus:border-green-500'
        } ${prefix ? 'pl-7' : 'pl-2'}`}
        {...register(name, validate)}
        {...rest}
        onFocus={onFocus}
      />
    </div>
  );
};

export default Input;
