import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  type: 'submit' | 'button';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'accent';
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  size,
  variant,
  type = 'button',
  onClick,
  children,
  disabled = false,
  ...rest
}: ButtonProps) => {
  const commonStyle = 'text-center';

  const variantStyle =
    variant === 'secondary'
      ? 'bg-slate-100'
      : variant === 'accent'
      ? 'bg-transparent text-red-600'
      : 'bg-green-500';

  const sizeStyle =
    size === 'lg'
      ? ' px-6 py-3 text-lg rounded-xl'
      : size === 'sm'
      ? 'px-4 py-3 text-sm rounded-md'
      : 'px-6 py-3 text-md rounded-lg';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${commonStyle} ${variantStyle} ${sizeStyle} `}
      {...rest}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
