import { CheckIcon } from '@heroicons/react/24/outline';

interface ToggleProps {
  rowsPerPage: number;
  showHandler: (e: React.MouseEvent) => void;
}

const Toggle = ({ rowsPerPage, showHandler }: ToggleProps) => {
  return (
    <div
      onClick={e => showHandler(e)}
      className="flex items-center gap-4 border border-slate-300 rounded-md pl-3 pr-2 py-1"
    >
      <div>{rowsPerPage} / page</div>

      <CheckIcon className="h-4 w-4" />
    </div>
  );
};

export default Toggle;
