import { ChangeEvent, DragEvent, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
type Props = {
  name: string;
  validate?: object;
  images: Photo[];
  collectFiles: (files: FileList) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
type Photo = {
  name: string;
  url: string;
};

const UploadFileContainer = ({
  name,
  validate,
  onChange,
  collectFiles,
  images,
}: Props) => {
  const havingImages = images.length > 0;
  const { register } = useFormContext();
  const [isDraggging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const selectFile = () => {
    fileInputRef?.current?.click();
  };

  const onDragOver = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
    e.dataTransfer.dropEffect = 'copy';
  };

  const onDragLeave = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    console.log(files);
    if (!files || files?.length === 0) return;
    collectFiles(files);
    setIsDragging(false);
  };

  return (
    <div
      onClick={selectFile}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={` ${
        havingImages ? '' : 'col-span-3 py-4'
      } flex cursor-pointer items-center justify-center overflow-hidden rounded-[14px] border-2 border-dashed ${
        isDraggging ? 'border-green-500' : ' border-slate-300 '
      } `}
    >
      <div className="flex  flex-col items-center justify-center px-2 py-1 ">
        <img src="/app-images/upload.png" alt="" />
        <input
          {...register(name, validate)}
          className="hidden"
          type="file"
          multiple
          ref={fileInputRef}
          onChange={onChange}
          accept="jpeg, png"
        />
        {havingImages ? (
          <span>Upload</span>
        ) : (
          <>
            <span className="text-center">
              Drop your images here, or{' '}
              <span className="text-blue-500">browse</span>
            </span>
            <span className="text-sm font-light text-slate-300">
              Support: jpeg, png
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default UploadFileContainer;
