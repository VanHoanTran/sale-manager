import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  divided?: boolean;
  stacked?: boolean;
};

const Card = ({ title, subtitle, divided, stacked, children }: CardProps) => {
  return (
    <div className="my-6">
      <div className="my-2">
        <h5 className="text-lg font-semibold text-slate-700">{title}</h5>
        <p className="text-sm font-light text-slate-500">{subtitle}</p>
      </div>
      <div
        className={` gird-cols-1 grid gap-4 ${
          !stacked ? 'lg:grid-cols-2' : ''
        }`}
      >
        {children}
      </div>
      {divided && <hr className="my-10" />}
    </div>
  );
};

export default Card;
