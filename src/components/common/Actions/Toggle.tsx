import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import IconButton from '../Buttons/IconButton';
import { MouseEvent, useContext } from 'react';
import actionContext from '../../../contexts/actionContext';

const Toggle = ({ id }: { id: string }) => {
  const { open, close, openId, setPosition } = useContext(actionContext);
  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
    const target = e.target as HTMLButtonElement;
    const rect = target.closest('button')?.getBoundingClientRect();
    if (setPosition && rect)
      setPosition({
        x: window.innerWidth - rect.width - rect.x + 18,
        y: rect.y + rect.height,
      });
    openId === '' || openId !== id ? open?.(id) : close?.();
  };
  return <IconButton onClick={handleClick} icon={<EllipsisVerticalIcon />} />;
};

export default Toggle;
