import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline';
import { formatCurrency } from '../../../utils';

interface StatsProps {
  title: string;
  data: number;
  percent: number;
}

const Status = ({ title, data, percent }: StatsProps) => {
  return (
    <div className="grid-item-border text-slate-600 ">
      <h5 className="text-sm font-bold">{title}</h5>
      <div className="mt-2 flex items-center justify-between">
        <div>
          <h6 className="mt-2 text-2xl font-bold">
            {formatCurrency(Math.abs(data))}
          </h6>
          <p className="text-sm font-light">
            vs. 3 months prior to <span className="font-semibold">20 Jan</span>
          </p>
        </div>
        <div
          className={`${
            percent > 0
              ? 'bg-emerald-100 text-emerald-600 '
              : 'bg-red-500/20 text-red-500'
          } flex items-center gap-1 rounded-full px-4 py-0.5 text-sm font-semibold opacity-75`}
        >
          <span>
            {percent > 0 ? (
              <ArrowUpIcon className="h-3 w-3 stroke-[4] font-bold" />
            ) : (
              <ArrowDownIcon className="h-3 w-3 stroke-[4] font-bold" />
            )}
          </span>
          <span>{percent}%</span>
        </div>
      </div>
    </div>
  );
};

export default Status;
