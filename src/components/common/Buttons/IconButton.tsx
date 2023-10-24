import { IconButtonProps } from '../../../constants/Props';

const IconButton = ({ onClick, icon }: IconButtonProps) => {
  return (
    <button
      className=" hover:bg-slate-100 rounded-full p-2 mx-1 transition-all ease-in duration-400 "
      onClick={onClick}
    >
      <span className="avatar-span">{icon}</span>
    </button>
  );
};

export default IconButton;
