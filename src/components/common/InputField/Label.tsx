type Props = {
  name: string;
  label: string;
};

const Label = ({ label, name }: Props) => {
  return (
    <label className="py-2 font-[500] text-slate-600" htmlFor={name}>
      {label}
    </label>
  );
};

export default Label;
