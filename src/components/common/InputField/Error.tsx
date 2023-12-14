import { useFormContext } from 'react-hook-form';
type Props = {
  name: string;
};

const Error = ({ name }: Props) => {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <p className=" absolute -bottom-[20px] left-1 inline-block text-sm text-red-400">
      {errors?.[`${name}`]?.message as string}
    </p>
  );
};

export default Error;
