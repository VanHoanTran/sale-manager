import { ReactNode, ReactSVGElement, cloneElement } from 'react';

type Props = {
  children: ReactNode;
  size?: string;
};

const SvgWrapper = ({ children, size = 'md' }: Props) => {
  const className =
    size === 'sm' ? 'h-4 w-4' : size === 'lg' ? 'h-8 w-8' : 'h-6 w-6';
  return cloneElement(children as ReactSVGElement, { className });
};

export default SvgWrapper;
