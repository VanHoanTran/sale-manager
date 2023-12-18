import { ChartBarIcon } from '@heroicons/react/24/solid';

const Logo = () => {
  return (
    <div className="flex h-16 items-center gap-2 px-4 ">
      <ChartBarIcon className="h-10 w-10 text-purple-800" />
      <span className="whitespace-nowrap text-2xl font-semibold text-slate-500">
        Sale Manager
      </span>
    </div>
  );
};

export default Logo;
