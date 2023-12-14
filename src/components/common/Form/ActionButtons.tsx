import { useFormContext } from 'react-hook-form';
import useSticky from '../../../hooks/useSticky';
import Button from '../Buttons/Button';

const ActionButtons = () => {
  const { reset } = useFormContext();
  const { setObserverRef, setObservedRef, sticky } = useSticky();
  return (
    <>
      <div
        ref={el => {
          setObserverRef(el);
        }}
        className={`flex justify-between gap-2 py-4 ${
          sticky
            ? 'sticky -bottom-1 -mx-14 border-t border-slate-300 bg-white px-16'
            : ' px-2'
        } `}
      >
        <Button variant="accent" type="button" onClick={undefined}>
          Delete
        </Button>

        <div className=" flex items-center justify-between gap-4">
          <Button variant="secondary" type="button" onClick={() => reset()}>
            Reset
          </Button>
          <Button type="submit" variant="primary">
            Submit
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

export default ActionButtons;
