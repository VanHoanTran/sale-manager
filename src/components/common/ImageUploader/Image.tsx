import { EyeIcon, TrashIcon } from '@heroicons/react/24/solid';

import IconButton from '../Buttons/IconButton';

type Photo = {
  name: string;
  url: string;
};
type Props = {
  image: Photo;
  handleRemove: (name: string) => void;
};

const ImageContainer = ({ image, handleRemove }: Props) => {
  const removeHandler = () => {
    handleRemove(image.name);
  };
  return (
    <div className="group relative flex items-center justify-center overflow-hidden rounded-[14px] border border-slate-300 p-2  ">
      <img className="rounded-md " src={image.url} alt={image.name} />
      <div className="absolute inset-2 hidden items-center justify-center rounded-md  group-hover:flex group-hover:bg-slate-600/80 ">
        <IconButton
          padding={false}
          icon={<EyeIcon />}
          onClick={() => console.log('see')}
        />
        <IconButton
          padding={false}
          icon={<TrashIcon />}
          onClick={removeHandler}
        />
      </div>
    </div>
  );
};

export default ImageContainer;
