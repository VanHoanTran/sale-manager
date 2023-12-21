import { ChangeEvent, useEffect, useState } from 'react';
import ImageContainer from './Image';
import UploadFileContainer from './UploadFile';
import { useFormContext } from 'react-hook-form';

type Props = {
  title?: string;
  subtitle?: string;
  name: string;
};
type Photo = {
  name: string;
  url: string;
};

const ImageUploader = ({ name, title, subtitle }: Props) => {
  const { setValue, getValues } = useFormContext();
  const initialImages: Photo[] = getValues(name)
    ? getValues(name).map((img: string) => ({
        name: img,
        url: img,
      }))
    : [];

  const [images, setImages] = useState<Photo[]>(initialImages);
  useEffect(() => {
    setValue(name, images);
  }, [images, name, setValue]);

  const onFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files?.length === 0) return;
    collectFiles(files);
    // reset value so that onChange will be executed every selection.
    // in case: select photo 1, then delete it by calling handleRemove()
    // then want to upload photo 1 again, the 2 selections are the same value
    // so the onchange will not be executed.
    e.target.value = '';
  };

  const collectFiles = (files: FileList) => {
    for (const file of files) {
      if (!(file.type.split('/').at(0) === 'image')) continue;
      if (!images.some(img => img.name === file.name)) {
        const newImage = {
          name: file.name,
          url: URL.createObjectURL(file),
        };
        setImages(images => [...images, newImage]);
      }
    }
  };

  const handleRemove = (imageName: string) => {
    setImages(images => images.filter(image => image.name !== imageName));
  };

  return (
    <div className="my-6 ">
      <div className="my-2">
        <h5 className="text-lg font-semibold text-slate-700">{title}</h5>
        <p className="text-sm font-light text-slate-500">{subtitle}</p>
      </div>
      <div className=" grid grid-cols-3 gap-2 lg:grid-cols-2 xl:grid-cols-3">
        {images.map(image => (
          <ImageContainer
            key={image.name}
            handleRemove={handleRemove}
            image={image}
          />
        ))}

        <UploadFileContainer
          collectFiles={collectFiles}
          onChange={onFileSelect}
          images={images}
          name={name}
        />
      </div>
    </div>
  );
};

export default ImageUploader;
