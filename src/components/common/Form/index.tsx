import { ReactElement } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import ChildrenElement from './ChildrenElement';
import ActionButtons from './ActionButtons';
import { FormValues } from '../../../constants/Props';

type Props = {
  defaultValues?: FormValues;
  children: ReactElement | ReactElement[];
  onSubmit: SubmitHandler<FormValues>;
};

//https://react-hook-form.com/docs/formprovider
const Form = ({ children, onSubmit, defaultValues }: Props) => {
  const methods = useForm({ mode: 'onBlur', defaultValues });
  const { handleSubmit } = methods;
  const submitHandler = handleSubmit(onSubmit);
  return (
    <FormProvider {...methods}>
      <form
        className=" relative flex flex-col gap-y-2"
        onSubmit={submitHandler}
      >
        <ChildrenElement children={children} />
        <ActionButtons />
      </form>
    </FormProvider>
  );
};

export default Form;
