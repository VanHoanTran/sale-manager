import { ReactElement } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import ChildrenElement from './ChildrenElement';

type Props = {
  defaultValues: FieldValues;
  children: ReactElement | ReactElement[];
  onSubmit: SubmitHandler<FieldValues>;
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
      </form>
    </FormProvider>
  );
};

export default Form;
