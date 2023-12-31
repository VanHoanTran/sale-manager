import { useFormContext } from 'react-hook-form';
import { useSticky } from '../../../hooks/useSticky';
import Button from '../Buttons/Button';

const AccountButtons = () => {
  const { reset } = useFormContext();
  const { setObserverRef, setObservedRef, sticky } = useSticky();
  return (
    <>
      <div
        ref={el => {
          setObserverRef(el);
        }}
        className={`flex justify-end gap-2 py-4 ${
          sticky
            ? 'sticky -bottom-1 -mx-14 border-t border-slate-300 bg-white px-16'
            : ' px-2'
        } `}
      >
        <div className=" flex items-center justify-between gap-4">
          <Button variant="secondary" type="button" onClick={() => reset()}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Update
          </Button>
        </div>
      </div>
      <div
        ref={el => {
          setObservedRef(el);
        }}
      ></div>
    </>
  );
};

export default AccountButtons;
