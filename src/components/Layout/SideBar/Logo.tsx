import { ChartBarIcon } from '@heroicons/react/24/solid';

const Logo = () => {
  return (
    <div className="px-4 h-16 flex items-center gap-2 ">
      <ChartBarIcon className="text-purple-800 h-10 w-10" />
      <span className="font-semibold text-2xl text-slate-500">
        Sale Manager
      </span>
    </div>
  );
};

export default Logo;
